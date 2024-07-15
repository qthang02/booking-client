import { Card, Col, Image, Layout, Row, Typography } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

import FooterClient from "../../components/MainLayout/footer";
import { Header } from "../../components/MainLayout/header";
import React from "react";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const cardStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const imageContainerStyle: React.CSSProperties = {
  height: 200,
  overflow: 'hidden',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const AboutUs: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "0 50px", backgroundColor: "#f0f2f5" }}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: 24,
            minHeight: 380,
            marginTop: 24,
          }}
        >
          <Title level={2} style={{ color: "#663366" }}>
            Welcome to Shelby Hotel
          </Title>
          <Paragraph>
            At Shelby Hotel, we blend elegance with modern luxury. Our hotel
            offers an unparalleled experience, with spacious rooms, gourmet
            dining, and exceptional service. Located in the heart of the city,
            Shelby Hotel is the perfect place for both business and leisure
            travelers.
          </Paragraph>

          <Title level={3} style={{ color: "#663366" }}>
            Our Vision
          </Title>
          <Paragraph>
            Our vision is to provide a world-class hospitality experience that
            exceeds the expectations of our guests. We strive to be a leader in
            the hospitality industry by focusing on customer satisfaction,
            innovation, and sustainability.
          </Paragraph>

          <Title level={3} style={{ color: "#663366" }}>
            Our Mission
          </Title>
          <Paragraph>
            Our mission is to deliver personalized service and create memorable
            experiences for our guests. We are committed to maintaining the
            highest standards of quality and professionalism in everything we
            do.
          </Paragraph>

          <Row gutter={16} style={{ marginTop: 32 }}>
            <Col span={8}>
              <Card
                hoverable
                style={cardStyle}
                cover={
                  <div style={imageContainerStyle}>
                    <Image
                      alt="Our History"
                      src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/143/2024/02/01113325/Pullman-Facade-Evening-1-1-1.jpg"
                      style={imageStyle}
                    />
                  </div>
                }
              >
                <Title level={4}>Our History</Title>
                <Paragraph>
                  Established in 1985, Shelby Hotel has grown to become a
                  symbol of luxury and comfort. Our rich history is reflected in
                  our commitment to providing exceptional service.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={cardStyle}
                cover={
                  <div style={imageContainerStyle}>
                    <Image
                      alt="Our Services"
                      src="https://dayuse.twic.pics/hotels/7731/b6d795a25acefc3818982847e8b11fe1-pullman-paris-montparnasse-2.jpg?twic=v1/cover=3840/quality=75"
                      style={imageStyle}
                    />
                  </div>
                }
              >
                <Title level={4}>Our Services</Title>
                <Paragraph>
                  We offer a wide range of services including a spa, fitness
                  center, conference rooms, and more. Our goal is to make your
                  stay as comfortable and enjoyable as possible.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card
                hoverable
                style={cardStyle}
                cover={
                  <div style={imageContainerStyle}>
                    <Image
                      alt="Contact Us"
                      src="https://www.ahstatic.com/photos/7489_ho_00_p_1024x768.jpg"
                      style={imageStyle}
                    />
                  </div>
                }
              >
                <Title level={4}>Contact Us</Title>
                <Paragraph>
                  <Text>
                    <PhoneOutlined /> +123 456 789
                  </Text>
                  <br />
                  <Text>
                    <MailOutlined /> contact@Shelbyhotel.com
                  </Text>
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <FooterClient />
    </Layout>
  );
};

export default AboutUs;
