import ProtectedRoute from "./ProtectedRoute";
import App from "./App";
import LandingPage from "./components/LandingPage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ResultPage from "./components/ResultPage";
import Profile from "./components/Profile";
import Playground from "./components/Playground";
import Whiteboard from "./components/whiteboard/Whiteboard";
import BlockchainWhiteboard from "./components/blockchain_space/BlockchainWhiteboard";
import PageNotFound from "./components/PageNotFound";
import { ReactFlowProvider } from "reactflow";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "result", element: <ResultPage /> },
      { path: "blockchainwhiteboard", element: <BlockchainWhiteboard /> },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "playground",
        element: (
          <ProtectedRoute>
            <Playground />
          </ProtectedRoute>
        ),
      },
      {
        path: "whiteboard",
        element: (
          <ProtectedRoute>
            <ReactFlowProvider>
              <Whiteboard />
            </ReactFlowProvider>
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
