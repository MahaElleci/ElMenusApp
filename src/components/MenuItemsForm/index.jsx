import {Form, Button} from "semantic-ui-react"
const MenuItemsForm = ({handleChange, handleItemFormSubmit, state}) => {
    return ( 
        <Form
        onSubmit={() => handleItemFormSubmit()}
        className="category-form"
      >
        <Form.Field  required error={state.error}>
          <label>Name</label>
          <input
            onChange={(e) => handleChange(e)}
            name="itemName"
            placeholder="Item name"
            value={state.itemName}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            onChange={(e) => handleChange(e)}
            name="itemPrice"
            placeholder="Price"
            value={state.itemPrice}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            onChange={(e) => handleChange(e)}
            name="itemDescription"
            placeholder="Add description"
            value={state.itemDescription}
          />
        </Form.Field>
        <Form.Field control={Button}>Add</Form.Field>
      </Form>
     );
}
 
export default MenuItemsForm;