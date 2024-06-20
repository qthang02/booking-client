import {Avatar, Button, DatePicker, Dropdown, Input, MenuProps, Space} from "antd";
import {MenuOutlined, SearchOutlined, UserOutlined} from "@ant-design/icons";
import { NavigateFunction, useNavigate } from "react-router-dom";

let navigation: NavigateFunction | ((arg0: string) => void);


export const Header = () => {
    navigation = useNavigate();
    const items: MenuProps["items"] = [
        {
            key: "4",
            label: (
                <span
                    style={{
                        fontSize: "18px",
                        fontWeight: "bolder"
                    }}
                >
                   Trang chủ
                </span>
            ),
            onClick: () => navigation("/")
        },
        
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
            ),
            onClick: () => navigation("/register")
        },
        {
            key: "2",
            label: (
                <span
                    style={{
                        fontSize: "18px",
                        fontWeight: "bolder"
                    }}
                >
                    Đăng nhập
                </span>
            ),
            onClick: () => navigation("/login")
        },
        {
            key: "3",
            label: (
                <span
                    style={{
                        fontSize: "18px",
                        fontWeight: "bolder"
                    }}
                >
                    Dịch vụ thuê phòng
                </span>
            )
        }
    ]
    
    const { RangePicker } = DatePicker;
    
    const itemOptionMenu: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <div
                    style={{
                        width: "400px",
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >
                    <div
                        style={{
                            fontSize: "20px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            borderBottom: "gray 1px solid",
                            padding: "15px 5px"
                        }}
                    >
                        <span>Người lớn</span>
                        <span
                            style={{
                                width: "150px",
                                height: "max-content",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                                <Button>-</Button>
                                <span>1</span>
                                <Button>+</Button>
                            </span>
                    </div>
    
                    <div
                        style={{
                            fontSize: "20px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            borderBottom: "gray 1px solid",
                            padding: "10px 5px"
                        }}
                    >
                        <span>Trẻ em</span>
                        <span
                            style={{
                                width: "150px",
                                height: "max-content",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                                <Button>-</Button>
                                <span>1</span>
                                <Button>+</Button>
                            </span>
                    </div>
    
                    <div
                        style={{
                            fontSize: "20px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: "10px 5px"
                        }}
                    >
                        <span>Phòng</span>
                        <span
                            style={{
                                width: "150px",
                                height: "max-content",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                                <Button>-</Button>
                                <span>1</span>
                                <Button>+</Button>
                            </span>
                    </div>
                </div>
            )
        }
    ]

    return (
        <Space
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "100%",
                height: "80px",
                borderBottom: "#C7C8CC 1px solid",
            }}
        >
            <span
                style={{
                    color: "#3572EF",
                    fontWeight: "bold",
                    fontSize: "xx-large",
                }}
            >
                Shelby Hotel
            </span>

            {/*search box*/}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "gray 1px solid",
                    borderRadius: "30px",
                    padding: "5px",
                }}
            >
                <div
                    style={{
                        borderRight: "gray 1px solid",
                        width: "300px",
                        padding: "5px"
                    }}
                >
                    <Input
                        size="large"
                        placeholder="Bạn muốn đi đâu ?"
                        style={{
                            width: "300px",
                            height: "100%",
                            padding: "0",
                            border: "none",
                            background: "none",
                            fontSize: "25px",
                            margin: "auto",
                        }}
                    />
                </div>

                {/*date picker*/}
                <div
                    style={{
                        borderRight: "gray 1px solid",
                        width: "300px",
                        margin: "auto 0",
                        padding: "5px"
                    }}
                >
                    <RangePicker/>
                </div>

                <div
                    style={{
                        width: "300px",
                        padding: "5px",
                        marginLeft: "10px",
                        margin: "auto 0"
                    }}
                >
                    <Dropdown menu={{items: itemOptionMenu}} placement="bottomLeft">
                        <span>1 người lớn • 0 trẻ em • 1 phòng</span>
                    </Dropdown>
                </div>

                {/*search button*/}
                <div
                    style={{
                        width: "30px",
                        height: "30px",
                        padding: "5px",
                        backgroundColor: "#3572EF",
                        border: "gray 1px solid",
                        borderRadius: "50%",
                        fontSize: "x-large",
                        color: "white",
                        margin: "auto",
                        cursor: "pointer"
                    }}
                >
                    <SearchOutlined />
                </div>

            </div>


            {/*menu*/}
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