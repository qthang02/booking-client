// import React from "react";
// import { useLocation } from "react-router-dom";

// interface BookingFormData {
//   SốNgười: string;
//   LoạiPhòng: string;
//   CácDịchVụKhác: string;
//   ĐỗXeÔTô: string;
//   ThờiGian: [moment.Moment, moment.Moment];
//   GhiChú: string;
// }

// const Payment: React.FC = () => {
//   const location = useLocation<{ state: BookingFormData }>();
//   const { state } = location;

//   return (
//     <div>
//       <h1>Thông tin thanh toán</h1>
//       <p>Số Người: {state.SốNgười}</p>
//       <p>Loại Phòng: {state.LoạiPhòng}</p>
//       <p>Các Dịch Vụ Khác: {state.CácDịchVụKhác}</p>
//       <p>Đỗ Xe Ô Tô: {state.ĐỗXeÔTô}</p>
//       <p>Thời Gian: {state.ThờiGian[0].format("YYYY-MM-DD HH:mm")} - {state.ThờiGian[1].format("YYYY-MM-DD HH:mm")}</p>
//       <p>Ghi Chú: {state.GhiChú}</p>
//     </div>
//   );
// };

// export default Payment;
