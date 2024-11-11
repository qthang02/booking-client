import { Layout } from 'antd';


import LayoutFooter from './footer.tsx';
import { LayoutHeader } from './layoutHeader.tsx';
import { Content } from 'antd/lib/layout/layout';


export const MainLayout = () => {

  return (
    <Layout>
      <LayoutHeader />
      <Content>

      </Content>
      <LayoutFooter />
    </Layout>
  );
};