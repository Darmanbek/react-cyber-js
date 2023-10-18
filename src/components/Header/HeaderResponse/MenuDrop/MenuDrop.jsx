import { Menu } from "antd";

const MenuDrop = ({ items, onClick }) => {
  return (
    <Menu onClick={onClick}>
      {items.map((item) => (
        <Menu.Item key={item.id}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuDrop;
