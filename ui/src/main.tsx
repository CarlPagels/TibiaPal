import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import { SideMenu } from "./components/SideMenu";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SideMenu><div>Hej</div> </SideMenu>,
    },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);