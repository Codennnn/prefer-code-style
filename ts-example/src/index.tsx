import 'antd/dist/antd.css'
import '@icon-park/react/styles/index.less'
import './mock'
// import reportWebVitals from './reportWebVitals'
import './styles/tailwind.css'
import './styles/app.scss'
import './scrollbar'

import { ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { persistor, store } from './redux'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense
          fallback={
            <div className="suspense">
              <Spin size="large" tip="页面加载中..." />
            </div>
          }
        >
          <ConfigProvider locale={zhCN}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ConfigProvider>
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
