import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { ConfigProviderWrap } from '@ant-design/pro-provider';
import ru_RU from 'antd/lib/locale/ru_RU';
import moment from 'moment';
import 'dayjs/locale/ru';
moment.locale("ru");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={ru_RU} moment={moment} theme={{
      token:{
        colorLink:'#0aacf2',
        colorLinkHover:'#04c4e0',
        colorPrimary:'#0aacf2',
        colorBgLayout:'#f5f5f5'
      }}}>
          <ConfigProviderWrap>
            <App />
          </ConfigProviderWrap>
    </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

