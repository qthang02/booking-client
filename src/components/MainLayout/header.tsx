import {Avatar, Dropdown, MenuProps, Space} from "antd";
import {MenuOutlined, UserOutlined} from "@ant-design/icons";

const items: MenuProps["items"] = [
    {
        key: '1',
        label: (
            <span
                style={{
                    fontSize: "18px",
                    fontWeight: "bolder"
                }}
            >
                Đăng ký
            </span>
        )
    },
    {
        key: "2",
        label: (
            <span
                style={{
                    fontSize: "18px"
                }}
            >
                Đăng nhập
            </span>
        )
    },
    {
        key: "3",
        label: (
            <span
                style={{
                    fontSize: "18px"
                }}
            >
                Cho thuê chô ở qua Booking
            </span>
        )
    }
]

export const Header = () => {
    return (
        <Space
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                height: "80px",
                paddingRight: "20px",
                borderBottom: "#C7C8CC 1px solid",
            }}
        >
            <span
                style={{
                    color: "#3572EF",
                    fontWeight: "bold",
                    fontSize: "xx-large",
                    marginLeft: "20px",
                }}
            >
                Booking
            </span>

            <Dropdown menu={{items}} placement="bottomRight">
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
                        padding: "2px",
                        cursor: "pointer",
                        marginRight: "20px"
                    }}
                >
                    <MenuOutlined/>
                    <Avatar size={35} icon={<UserOutlined/>}/>
                </div>
            </Dropdown>
        </Space>
    )
}