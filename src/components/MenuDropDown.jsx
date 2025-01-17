import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";

const MenuDropDown = ({ title, secondaryTitle }) => {
  const items = [];
  const navigate = useNavigate();

  secondaryTitle.forEach((title, index) => {
    items.push({ label: title.title, key: title.link, link: title.link });
  });

  const onClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      overlayClassName="lg:py-8 lg:w-[15rem]"
    >
      <div className="cursor-pointer flex items-center gap-2 justify-center uppercase font-medium">
        {title}
        <DownOutlined />
      </div>
    </Dropdown>
  );
};
export default MenuDropDown;
