import './index.css'

import {ConfigProvider} from "antd";
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider
        theme={{
            token: {
                fontFamily: "Be Vietnam Pro",
            },
        }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
)
