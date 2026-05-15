import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>} />
            </Route>
        </>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
