import { Button, Carousel, Layout, Typography } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import FooterClient from "./footer.tsx";
import { Header } from "./header.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "450px",
  color: "#fff",
  lineHeight: "450px",
  textAlign: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: "#663366",
  borderColor: "#663366",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  borderRadius: "5px",
};

// const containerStyle: React.CSSProperties = {
//   backgroundColor: "#f8f8f8",
//   padding: "20px",
// };

const infoStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "20px auto",
  maxWidth: "100%",
  width: "100%",
};

const socialIconStyle: React.CSSProperties = {
  fontSize: "24px",
  margin: "0 10px",
  color: "#663366",
};

export const MainLayout = () => {
  const navigate = useNavigate();

  const handleRoomButtonClick = () => {
    navigate("/categories");
  };

  const handleAboutUsButtonClick = () => {
    navigate("/about-us");
  };

  return (
    <Layout className="flex flex-col min-h-screen">
      <Header />
      <Content>
        <Carousel
          effect="fade"
          arrows
          infinite={false}
          autoplay
          autoplaySpeed={1600}
        >
          <div>
            <img
              src="https://everonhotel.com/wp-content/uploads/2023/01/279946906.jpg"
              alt="Slide 1"
              style={{ ...imageStyle, ...contentStyle }}
            />
          </div>
          <div>
            <img
              src="https://iwater.vn/Image/Picture/Dia-danh/pullman-saigon-centre.jpg"
              alt="Slide 2"
              style={{ ...imageStyle, ...contentStyle }}
            />
          </div>
          <div>
            <img
              src="https://timviecphuquoc.xyz/wp-content/uploads/2021/01/pullman-phu-quoc-exterior.jpg"
              alt="Slide 3"
              style={{ ...imageStyle, ...contentStyle }}
            />
          </div>
          <div>
            <img
              src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/225/2020/10/15025656/download-9.png"
              alt="Slide 4"
              style={{ ...imageStyle, ...contentStyle }}
            />
          </div>
        </Carousel>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "20vh",
            gap: "10px",
            padding: "20px 0",
          }}
        >
          <Button
            style={buttonStyle}
            size="large"
            type="primary"
            onClick={handleRoomButtonClick}
          >
            Loại Phòng
          </Button>
          <Button
            style={buttonStyle}
            size="large"
            type="primary"
            onClick={handleAboutUsButtonClick}
          >
            About Us
          </Button>
        </div>

        <div style={{ maxWidth: "100%", padding: "0 20px" }}>
          <div style={infoStyle}>
            <Title level={2} style={{ color: "#663366", padding: "0 50px" }}>
              THE HOTEL
            </Title>
            <Paragraph>
              Located centrally within Ho Chi Minh City, close to Ben Thanh
              market, Pham Ngu Lao area, many tourist attractions and 30 minutes
              to SECC, the hotel features 306 signature rooms combining design,
              comfort and connectivity. Facilities include all day dining
              restaurant, pop-up burger bar and Mad Cow Wine & Grill with
              panoramic views of the city. The hotel also has free Wi-Fi, swimming
              pool, fitness centre, spa and high-tech meeting venues able to host
              up to 350 guests.
            </Paragraph>
            <Title level={3} style={{ color: "#663366" }}>
              Shelby Saigon Centre ☆☆☆☆☆
            </Title>
            <Paragraph>
              148 Tran Hung Dao Boulevard, District 1, 70000 Ho Chi Minh City
              <br />
              Vietnam
              <br />
              <Text strong>Tel:</Text> +84 (0)28 3838 8686
              <br />
              <Text strong>Fax:</Text> +84 (0)28 3838 8627
              <br />
              <Text strong>Email:</Text> H7489@ACCOR.COM
              <br />
            </Paragraph>
            <Button type="link" style={{ padding: 0 }}>
              See the Map
            </Button>
          </div>
        </div>
        <Carousel
          effect="fade"
          arrows
          infinite={false}
          autoplay
          autoplaySpeed={1600}
        >
          <div>
            <img
              src="https://pullmanphuquoc.com/wp-content/uploads/sites/225/2020/06/1823_Suite-Ocean-View_1-1.jpg"
              alt="Slide 1"
              style={{ ...imageStyle, ...contentStyle }}
            />
          </div>
          <div>
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/425314039.jpg?k=bf500460f683e274994e485eff0c9d01b055b9e8561c992c7b89971ef5908255&o=&hp=1"
              alt="Slide 2"
              style={{ ...imageStyle, ...contentStyle }}
            />
          </div>
        </Carousel>
        <div style={{ ...infoStyle, textAlign: "center" }}>
          <Title level={3} style={{ color: "#663366" }}>
            FOLLOW US
          </Title>
          <Paragraph>
            Stay in touch and connected to all the news and happenings.
          </Paragraph>
          <div>
            <FacebookOutlined style={socialIconStyle} />
            <LinkedinOutlined style={socialIconStyle} />
            <TwitterOutlined style={socialIconStyle} />
            <InstagramOutlined style={socialIconStyle} />
          </div>
        </div>
      </Content>
      <FooterClient />
    </Layout>
  );
};