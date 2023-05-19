import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import Register from "./views/Register"
import Login from "./views/Login"
import Write from "./views/Write"
import Single from "./views/Single"
import Home from "./views/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.scss"


const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

function App() {
  return <div className="app">
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </div>;
}



export default App;
