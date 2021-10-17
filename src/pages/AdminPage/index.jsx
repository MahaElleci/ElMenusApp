import { Grid, Container, Message, Icon } from "semantic-ui-react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import {
  add_category,
  add_ItemToCategory,
  delete_category,
} from "../../redux/reducers/categories";

import MenuListing from "../../components/MenuListing";
import EditableMenuItem from "../../components/EditableMenuItem";
import CategoryForm from "../../components/CategoryForm";
import MenuItemsForm from "../../components/MenuItemsForm";

import "./styles.scss";
const AdminPage = () => {
  const [state, setState] = useState({
    categoryId: "",
    categoryName: "",
    categoryDescription: "",
    itemName: "",
    itemDescription: "",
    itemPrice: "",
    error: false,
    showSuccessMessage: false,
  });
  const location = useLocation();
  const dispatch = useDispatch();
  const categoriesData = useSelector((state) => state.categories.categories);

  const newItemRef = useRef(null);

  const executeScroll = () => newItemRef.current.scrollIntoView();
  const handleCategoryFormSubmit = () => {
    if (state.categoryName === "") {
      setState({
        ...state,
        error: true,
      });
      return;
    }
    const categoryId = Math.random().toString(36).substr(2, 9);
    let addedCategory = {
      id: categoryId,
      name: state.categoryName,
      description: state.categoryDescription,
      items: [],
    };
    setState({
      ...state,
      categoryId: categoryId,
      categoryName: "",
      categoryDescription: "",
      showSuccessMessage: true,
    });
    dispatch(add_category(addedCategory));
    executeScroll();
  };
  const handleItemFormSubmit = () => { 
    if (state.itemName === "") {
        setState({
          ...state,
          error: true,
        });
        return;
      }
    let addedItem = {
      name: state.itemName,
      description: state.itemDescription,
      price: state.itemPrice,
    };
    let payload = {
      categoryId: state.categoryId,
      addedItem: addedItem,
    };
    dispatch(add_ItemToCategory(payload));
    setState({
      itemName: "",
      itemDescription: "",
      itemPrice: "",
    });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const returnSuccessMessage = (text) => {
    return (
      <Message positive>
        <Message.Header>{text}</Message.Header>
      </Message>
    );
  };

  const handleDeleteCategory = (id) => {
    dispatch(delete_category(id));
  };
  const handleEditCategory = (id) => {
    setState({
      ...state,
      categoryId: id,
    });
  };
  return (
    <div className="admin-page">
      <Link
        to={{
          pathname: "/usersPage",
          state: { isAdmin: location.state.isAdmin },
        }}
        className="backBtn"
      > 
       <Icon name="angle left" />
        Back 
      </Link>
      <Container>
        <div className="banner">
          <img src="elmenus-logo.jpg" /> 
          <p>Admin Page</p>
        </div>
        {state.showSuccessMessage &&
          returnSuccessMessage("Category Item Added")}
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <CategoryForm
                handleChange={handleChange}
                handleCategoryFormSubmit={handleCategoryFormSubmit}
                state={state}
              />
            </Grid.Column>
            <Grid.Column width={9}>
              <h3>Menu Data</h3>
              {categoriesData.map((item) => {
                return (
                  <div ref={newItemRef}>
                    <Container className="menuItem">
                      <EditableMenuItem
                        data={item}
                        deleteHandler={handleDeleteCategory}
                        editHandler={handleEditCategory}
                      />
                      <MenuListing data={item.items} />
                      {item.id === state.categoryId && (
                        <MenuItemsForm
                          handleChange={handleChange}
                          handleItemFormSubmit={handleItemFormSubmit}
                          state={state}
                        />
                      )}
                    </Container>
                  </div>
                );
              })}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default AdminPage;
