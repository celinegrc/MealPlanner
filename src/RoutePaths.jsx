import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import Recipe from './pages/Recipe/Recipe'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/idee-repas",
        element: <Recipe />,
      },
  ]);

  export default router;

