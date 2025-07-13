import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import "./index.css";
import { store } from "./redux/store.ts";
import routes from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { zIndex: 9999 },
        }}
      />
    </Provider>
  </StrictMode>
);
