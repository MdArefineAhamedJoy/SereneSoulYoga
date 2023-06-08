import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import AuthProvider from "./Provider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-slate-200">
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </div>
);
