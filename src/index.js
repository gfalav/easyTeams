import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Theme from './common/layout/theme/Theme'
import { ThemeProvider, createTheme } from '@mui/material'
//pages
import Layout from './common/layout/Layout'
import ErrorPage from './common/layout/ErrorPage'
import Home from './common/home/Home'
import SignUp from './common/layout/auth/SignUp'
import SignIn from './common/layout/auth/SignIn'
import EditUsr from './common/layout/auth/EditUsr'
import Reset from './common/layout/auth/Reset'
import UpdatePwd from './common/layout/auth/UpdatePwd'

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />},
      { path: "auth/signup", element: <SignUp />},
      { path: "auth/signin", element: <SignIn />},
      { path: "auth/reset", element: <Reset />},
      { path: "auth/update-password", element: <UpdatePwd />},
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