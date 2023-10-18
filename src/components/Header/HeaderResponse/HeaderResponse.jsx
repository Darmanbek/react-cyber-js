import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  PlusCircleOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import MenuDrop from "./MenuDrop/MenuDrop";
import "./headerResponse.scss";
import { Dropdown, message } from "antd";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log('click', e)
};

const menu = (
  <MenuDrop
    onClick={handleMenuClick}
    items={[
      {
        label: "1st menu item",
        id: "0",
      },
      {
        label: "2nd menu item",
        id: "1",
      },
    ]}
  />
);

const HeaderResponse = () => {
  return (
    <div className="header-response">
      <NavLink
        to={`/`}
        className={({ isActive }) =>
          isActive ? "response-link active" : "response-link"
        }
      >
        <HomeOutlined />
        <span className="link-text">Главная</span>
      </NavLink>
      <NavLink
        to={`/page-favorites`}
        className={({ isActive }) =>
          isActive ? "response-link active" : "response-link"
        }
      >
        <HeartOutlined />
        <span className="link-text">Избранное</span>
      </NavLink>
      <NavLink
        to={`/page-add-create`}
        className={({ isActive }) =>
          isActive ? "response-link active" : "response-link"
        }
      >
        <PlusCircleOutlined />
      </NavLink>
      <NavLink
        to={`/page-profile`}
        className={({ isActive }) =>
          isActive ? "response-link active" : "response-link"
        }
      >
        <UserOutlined />
        <span className="link-text">Профиль</span>
      </NavLink>
      <Dropdown trigger={["click"]}>
        <button
          className="response-btn"
          type="text"
        >
          <GlobalOutlined />
          <span className="link-text">язык</span>
        </button>
      </Dropdown>
    </div>
  );
};

export default HeaderResponse;
