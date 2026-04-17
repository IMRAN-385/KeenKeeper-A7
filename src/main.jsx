import { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from "react-router";
import Rootlayout from "./layouts/Rootlayout";
import Homepage from './Pages/Homepage/Homepage.jsx';
import FriendDetail from './Pages/FriendDetail.jsx';
import Timeline from './Pages/Timeline.jsx';
import Stats from './Pages/Stats.jsx';
import { Toaster } from 'react-hot-toast';
import { TimelineProvider } from './Context/TimelineContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: "friends/:id",
        element: <FriendDetail/>,
      },
      {
        path: "timeline",
        element: <Timeline/>,
      },
      {
        path: "stats",
        element: <Stats/>,
      },
    ],
    errorElement: <h2>404 - Page Not Found</h2>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </TimelineProvider>
  </StrictMode>,
)