import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import {useAuthStore} from "../../store/auth.ts";

export const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuthToken = useAuthStore((state) => state.setAuthToken);

  useEffect(() => {
      const token = useAuthStore.getState().authToken;
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    setAuthToken(undefined);
    setIsAuthenticated(false);
    navigate("/login");
  };

  const items: MenuProps["items"] = isAuthenticated
    ? [
        {
          key: "1",
          label: (
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Tài khoản
            </span>
          ),
          onClick: () => navigate("/profile"),
        },
        {
          key: "2",
          label: (
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Lịch sử đặt phòng
            </span>
          ),
          onClick: () => navigate("/bookinghistory"),
        },
        {
          key: "3",
          label: (
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Đăng xuất
            </span>
          ),
          onClick: handleLogout,
        },
      ]
    : [
        {
          key: "1",
          label: (
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Trang chủ
            </span>
          ),
          onClick: () => navigate("/"),
        },
        {
          key: "2",
          label: (
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Đăng ký
            </span>
          ),
          onClick: () => navigate("/register"),
        },
        {
          key: "3",
          label: (
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Đăng nhập
            </span>
          ),
          onClick: () => navigate("/login"),
        },
      ];

  return (
    <Space
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "80px",
        borderBottom: "#C7C8CC 1px solid",
        backgroundColor: "#FFFFFF",
        padding: "0 20px",
      }}
    >
        <div
            style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                left: "50px",
                cursor: "pointer"
            }}
            onClick={() => navigate("/")}
        >
            <img src="https://gleam.run/images/lucy/lucy.svg" alt="logo" width="70px" height="70px"/>
        </div>

        <div style={{marginLeft: "-20px"}}>
        <span
            style={{
            color: "#663366",
            fontWeight: "bold",
            fontSize: "large",
            whiteSpace: "nowrap",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Lato', sans-serif",
          }}
        >
          SHELBY SAIGON CENTRE
        </span>
      </div>

      <Dropdown menu={{ items }} placement="bottomRight">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            height: "40px",
            width: "86px",
            border: "gray 1px solid",
            borderRadius: "24px",
            padding: "5px",
            cursor: "pointer",
            marginRight: "70px",
          }}
        >
          <MenuOutlined />
          <Avatar size={35} icon={<UserOutlined />} />
        </div>
      </Dropdown>
    </Space>
  );
};
