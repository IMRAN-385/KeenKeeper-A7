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
    errorElement: 
    <main class="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
    <p class="text-base font-semibold text-indigo-400">404</p>
    <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Page not found</h1>
    <p class="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Go back home</a>
      <a href="#" class="text-sm font-semibold text-white">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
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