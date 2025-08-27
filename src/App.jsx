import { Menu } from './components/Menu'
import { Outlet } from "react-router";
import './App.css'
import { CustomNavBar } from './components/customNavBar';

function App() {
  return (
    <>
      <header>
        <CustomNavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
