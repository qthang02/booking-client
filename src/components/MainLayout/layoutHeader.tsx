import { Layout, Menu, MenuProps, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledButton = styled(Button)`
  background: transparent;
  border: 1px solid white;
  color: white;
  height: 40px;
  padding: 0 25px;
  border-radius: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background: white !important;
    color: #1a1a1a !important;
    border-color: white !important;
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  &:focus {
    background: transparent;
    border-color: white;
    color: white;
  }
`;


export const LayoutHeader = () => {
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: 1,
      label: <Typography.Text style={{ color: 'white', fontSize: 'large' }}>Trang chủ</Typography.Text>,
      onClick: () => navigate('/'),
    },
    {
      key: 2,
      label: <Typography.Text style={{ color: 'white', fontSize: 'large' }}>Phòng</Typography.Text>,
      onClick: () => navigate('/categories'),
    },
    {
      key: 3,
      label: <Typography.Text style={{ color: 'white', fontSize: 'large' }}>Về chúng tôi</Typography.Text>,
      onClick: () => navigate('/about-us'),
    },
  ];

  return (
    <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="../../../public/images/lucy.svg"
        alt="logo"
        width="70px"
        height="70px"
        onClick={() => navigate('/')}
      />

      <Menu
        mode="horizontal"
        theme="light"
        items={items}
        style={{
          flex: 1,
          justifyContent: 'center',
          background: 'transparent',
          borderBottom: 'none',
        }}
      />

      <StyledButton>Đăng nhập</StyledButton>
    </Layout.Header>
  );
};