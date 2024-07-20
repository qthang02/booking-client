import { Col, Divider, Layout, Row, Space, Typography } from 'antd';
import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, PhoneOutlined, TwitterOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const FooterClient = () => {
    return (
        // #0077b5
        <Footer
            style={{
                backgroundColor: '#663366',
                color: 'white',
                position: "static",
                width:'100%',
                bottom: "0",
                paddingRight: "0",
                paddingLeft: "0"
            }}>
            <Row justify="center" align="middle">
                <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <Space direction="vertical" size="small">
                        <div>
                            <FacebookOutlined style={{ fontSize: '24px', color: 'white' }} />
                            <InstagramOutlined style={{ fontSize: '24px', color: 'white' }} />
                            <TwitterOutlined style={{ fontSize: '24px', color: 'white' }} />
                        </div>
                        <Divider style={{ backgroundColor: 'white' }} />
                        <div>
                            <EnvironmentOutlined style={{ fontSize: '16px', color: 'white' }} />
                            <Text style={{ color: 'white' }}>123 Đường ABC, Quận XYZ, Thành phố HCM</Text>
                        </div>
                        <div>
                            <PhoneOutlined style={{ fontSize: '16px', color: 'white' }} />
                            <Text style={{ color: 'white' }}>(123) 456-7890</Text>
                        </div>
                        <Divider style={{ backgroundColor: 'white' }} />
                        <Text style={{ color: 'white' }}>Shelby Limited Company</Text>
                    </Space>
                </Col>
            </Row>
        </Footer>
    );
};

export default FooterClient;
