// layoutHeader.tsx
import { Layout, Menu, MenuProps, Typography, DatePicker, InputNumber, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled(Layout.Header)`
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 1;
  padding: 0 50px;
`;

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


const HeroSection = styled.div`
  height: 100vh;
  position: relative;
  background-image: url('https://www.trailsofindochina.com/wp-content/uploads/2017/05/hochiminhcity_header.jpg');
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const BookingForm = styled.div`
  position: absolute;
  bottom: 350px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  gap: 10px;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  
  h1 {
    font-size: 48px;
    color: white;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
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
    <HeroSection>
      <StyledHeader>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="../../../public/images/lucy.svg"
            alt="logo"
            width="70px"
            height="70px"
            onClick={() => navigate('/')}
          />

          <Menu
            mode="horizontal"
            items={items}
            style={{
              flex: 1,
              justifyContent: 'center',
              background: 'transparent',
              borderBottom: 'none',
            }}
          />

          <StyledButton>Đăng nhập</StyledButton>
        </div>
      </StyledHeader>

      <HeroContent>
        <h1>STARFISH SAIGON HOTEL</h1>
      </HeroContent>

      <BookingForm>
        <DatePicker placeholder="ngày đến" />
        <DatePicker placeholder="ngày về" />
        <InputNumber placeholder="người lớn" min={1} />
        <InputNumber placeholder="trẻ em" min={0} />
        <Button type="primary">BOOKING</Button>
      </BookingForm>
    </HeroSection>
  );
};