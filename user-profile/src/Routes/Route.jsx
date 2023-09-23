import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import UserListPage from "../Pages/UserListPage";
import UserDetailsPage from "../Pages/UserDetailsPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:"/",
            element:<UserListPage/>
        },
         {
            path:"/about",
            element:<AboutPage/>
        },
          {
            path:"/contact",
            element:<ContactPage/>
        },
        {
            path:"/users/:id",
            element:<UserDetailsPage/>,
            loader:({params})=>fetch(`https://user-profile-backend.vercel.app/users/${params.id}`)
        }
    ]
  },
]);

export default router;