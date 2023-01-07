import { Fragment } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'
import Order from './components/order/Order'
import Profile from './components/profile/Profile'
import Promo from './components/promo/Promo'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'profile', element: <Profile /> },
            { path: 'order', element: <Order /> },
            { path: 'promo', element: <Promo /> }
        ]
    }
])

function App() {
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    )
}

export default App
