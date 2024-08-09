import { Result, Button } from 'antd';
import { Header } from '../../components/MainLayout/header';
import FooterClient from '../../components/MainLayout/footer';
import {useNavigate} from "react-router-dom";

const StatusPayment: React.FC = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <Result
                    status="success"
                    title="Thanh toán thành công!"
                    subTitle="Cảm ơn bạn đã đặt phòng. Chúng tôi sẽ gửi thông tin chi tiết qua email của bạn."
                    extra={[
                        <Button type="primary" key="console" onClick={handleBackHome}>
                            Trở về trang chủ
                        </Button>,
                    ]}
                />
            </div>
            <FooterClient />
        </div>
    );
};

export default StatusPayment;