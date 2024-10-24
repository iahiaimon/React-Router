import { createBrowserRouter, Link } from "react-router-dom";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        path: '/card', 
        element: <Card />
      },
      {
        path: '/footer',
        element: <Footer />
      }
    ]
  },
]);
