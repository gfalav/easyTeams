import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './common/layout/Layout'
import Theme from './common/layout/theme/Theme'
import { ThemeProvider, createTheme } from '@mui/material'
import ErrorPage from './common/layout/ErrorPage'
import Home from './common/home/Home'
import SignUp from './common/layout/auth/SignUp'
import { RecoilRoot } from 'recoil'
import SignIn from './common/layout/auth/SignIn'
import EditUsr from './common/layout/auth/EditUsr'

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />},
      { path: "auth/signup", element: <SignUp />},
      { path: "auth/signin", element: <SignIn />},
      { path: "auth/editusr", element: <EditUsr />}
    ],
  },
])

const theme = createTheme(Theme())

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </ThemeProvider>
)