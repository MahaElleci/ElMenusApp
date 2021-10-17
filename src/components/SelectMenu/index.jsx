import { Menu } from "semantic-ui-react";
const SelectMenu = ({ data, selected, clickHandler }) => {
  return (
    <div>
      <Menu secondary vertical>
        {data &&
          data.map((item) => (
            <Menu.Item
              key={item.id}
              name={item.name}
              onClick={(e, { name }) => clickHandler(e, { name })}
              active={selected === item.name}
            >
              {item.name}
            </Menu.Item>
          ))}
      </Menu>
    </div>
  );
};

export default SelectMenu;
