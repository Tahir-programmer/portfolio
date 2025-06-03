import { useState } from 'react'
import NavMenus from './components/Navbar'
import HeroSection from './components/Hero'
import LayoutWrapper from './Layouts/Layout'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LayoutWrapper>
       <NavMenus />
       <HeroSection className="" />
    </LayoutWrapper>
  )
}

export default App
