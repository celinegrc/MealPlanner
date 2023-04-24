import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import Recipe from './pages/Recipe/Recipe'
import Error404 from './pages/404/Error404'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/MealPlanner",
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
      {
        path: "/*",
        element: <Error404 />,
      },
  ]);

  export default router;


