import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'
import VariationPage from './pages/VariationPage.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>
  },
  {
    path : "Historico",
    element : <VariationPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
