import { useEffect, useState } from "react";
import { Grid, Container } from "semantic-ui-react";
import MenuListing from "../../components/MenuListing";
import { getCategories } from "../../services/categories";
import SelectMenu from "../../components/SelectMenu";

import { list_categories } from "../../redux/reducers/categories";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
const MenuPage = () => {
  const categoriesData = useSelector((state) => state.categories.categories);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);

  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (categoriesData.length === 0)
      getCategories()
        .then((res) => res.json())
        .then((data) => dispatch(list_categories(data["categories"])));
  }, []);
  const handleItemClick = (e, { name }) => {
    setSelectedCategoryName(name);
    let menuItems = categoriesData.find((item) => item.name === name);
    setSelectedCategoryData(menuItems["items"]);
  };
  return (
    <div className="menu-page">
      <Container> 
      <div className="banner">
      <img src="elmenus-logo.jpg"/> 
      {location.state && location.state.isAdmin && (
          <Link
            className="adminBtn"
            to={{
              pathname: "/adminPage",
              state: {
                isAdmin: location.state.isAdmin,
              },
            }}
          >
            Admin
          </Link>
        )}
      </div>
       
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <SelectMenu
                data={categoriesData}
                selected={selectedCategoryName}
                clickHandler={handleItemClick}
              />
            </Grid.Column>
            <Grid.Column width={9}>
              {selectedCategoryData.length > 0 ? (
                <MenuListing data={selectedCategoryData} />
              ) : (
                <h3>Select a category</h3>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default MenuPage;
