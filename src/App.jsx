
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './page/component/NavBar/Navbar'
import Footer from './page/component/Footer/Footer'

function App() {
  (0)

  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
