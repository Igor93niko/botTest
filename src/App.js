import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './Routes/Routes';
import { Layout } from 'antd';
const { Content } = Layout;


function App() {
  const router = useRoutes(true);
  return (
      <Router>
        <Layout style={{minHeight: '100vh'}} hasSider>
          <Layout className="site-layout" style={{zIndex:'1'}}>
            <Layout.Content>
              <Content>
                <div className='main'>
                  {router}
                </div>
              </Content>
            </Layout.Content>
          </Layout>
        </Layout>
      </Router>
  );
}

export default App;
