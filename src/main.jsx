import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// In the task there is no data, but in real project there should be data and the products should be displayed according to the data returned from the API according to the (code) parameter in the API
import store from './redux/store'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
