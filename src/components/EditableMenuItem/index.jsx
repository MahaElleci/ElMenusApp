import { Button, Label } from "semantic-ui-react"; 
import "./styles.scss";
const EditableMenuItem = ({ data, deleteHandler, editHandler }) => { 
  return (
    <div className="editableItem-wrapper"> 
        <Label>{data.name} 
        <Label>{data.description}</Label>
        </Label>
      <Button.Group>
        <Button onClick={() => editHandler(data.id)}positive>edit</Button>
        <Button.Or text="or" />
        <Button onClick={() => deleteHandler(data.id)} negative>delete</Button>
      </Button.Group>
    </div>
  );
};

export default EditableMenuItem;
