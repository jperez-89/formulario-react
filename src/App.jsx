import { Outlet } from "react-router";
import { CustomNavBar } from './components/CustomNavBar';
import './App.css'

export default function App() {
  return (
    <>
      <header>
        <CustomNavBar />
      </header>

      {/* Aqui se renderizan todas las ventanas */}
      <main>
        <Outlet />
      </main>
    </>
  )
}