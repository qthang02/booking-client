import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query';

import {ConfigProvider} from "antd";
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: "Be Vietnam Pro",
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    </QueryClientProvider>

)
