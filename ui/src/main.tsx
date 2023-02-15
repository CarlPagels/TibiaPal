import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import "./index.css";
import { About, ArticleList } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components";
import { NotFound } from "./NotFound";

const NavBarWrapper = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBarWrapper />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <ArticleList/>,

            },
            {
                path: "/about",
                element: <About/>,
            },
        ]
    }

]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    </React.StrictMode>
);