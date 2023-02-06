import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Main from './pages/Main';
import Carts from './pages/Carts';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      // <App />에는 브랜드 로고, 쇼핑카트, 로그인 버튼을 헤더로 넣고
      // <Main />에는 banner와 <Products />를 아래에 넣어줘야 할 것 같다.
      { index: true, element: <Main /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      { path: '/carts', element: <Carts /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
