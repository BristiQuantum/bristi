import { createBrowserRouter } from "react-router-dom";
import Home_Page from "../page/Home_Page/Home_Page";
import App from '../App'
import Contact_Page from "../page/Contact_Page/Contact_Page";

import Sushi_Restruent from "../page/Portfollio_Page/Sushi_Restruent";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home_Page></Home_Page>
      },
      {
        path: '/sushi',
        element: <Sushi_Restruent></Sushi_Restruent>
      },
      {
        path: '/contact',
        element: <Contact_Page></Contact_Page>
      },
    ]
  },

]);