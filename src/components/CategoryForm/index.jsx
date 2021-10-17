import { Form, Button } from "semantic-ui-react"; 
const CategoryForm = ({handleChange, handleCategoryFormSubmit, state}) => { 
  return (
    <div>
      <h3>Add Category</h3>
      <Form 
      error={state.error}
        className="category-form"
        onSubmit={() => handleCategoryFormSubmit()}
      >
        <Form.Field required error={state.error}>
          <label>Name</label>
          <input
            name="categoryName"
            onChange={(e) => handleChange(e)}
            placeholder="Add Category"
            value={state.categoryName}  
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea
            name="categoryDescription"
            onChange={(e) => handleChange(e)}
            placeholder="Add description"
            value={state.categoryDescription}
          />
        </Form.Field>
        <Form.Field control={Button}>Add</Form.Field>
      </Form>
    </div>
  );
};

export default CategoryForm;
