import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route } from 'react-router-dom';

// import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './Layout';
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import User from './components/user/User';
import Github, { githubInfoLoader } from './components/github/Github';
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
        path='github' element={<Github />}
        loader={githubInfoLoader}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);