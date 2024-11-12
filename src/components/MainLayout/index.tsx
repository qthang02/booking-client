import { Layout } from 'antd';


import { LayoutHeader } from './layoutHeader.tsx';
import { Content } from 'antd/lib/layout/layout';
import { Outlet } from 'react-router-dom';


export const MainLayout = () => {

  return (
    <Layout>
      <LayoutHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};