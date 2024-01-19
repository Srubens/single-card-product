import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import SingleProduct from './pages/SingleProduct'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path:'/',
    element:<SingleProduct/>
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
