import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import "./index.css";
import { About, ArticleList, LootSplit } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components";
import { NotFound } from "./NotFound";
import { Donators } from "./routes/Donators";

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
            {
                path: "/donators",
                element: <Donators/>,
            },
            {
                path: "/lootsplit",
                element: <LootSplit />,
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