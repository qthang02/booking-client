import { Button, Carousel } from "antd";

import Cskhbutton from "./CSKH.drawer.tsx";
import FooterClient from "./footer.tsx";
import { Header } from "./header.tsx";
import React from "react";
import { useNavigate } from "react-router-dom";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "450px", // Giảm chiều cao của contentStyle
  color: "#fff",
  lineHeight: "450px", // Căn giữa nội dung dọc theo chiều cao mới
  textAlign: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const MainLayout = () => {
  const navigate = useNavigate(); // Hook để điều hướng trong React Router

  // Hàm xử lý khi click vào nút "Loại Phòng"
  const handleRoomButtonClick = () => {
    navigate("/rooms"); // Điều hướng đến đường dẫn /rooms
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <>
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
            gap:"10px"
          }}
        >
             <Cskhbutton/>
          {/* Nút "Loại Phòng" với sự kiện onClick */}
          <Button size="large" type="primary" onClick={handleRoomButtonClick}>
            Loại Phòng
          </Button>{" "}
        </div>

        <br />
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
      </>
      <FooterClient/>
    </div>
  );
};
