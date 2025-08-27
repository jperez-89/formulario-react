import { Outlet } from "react-router";
import { CustomNavBar } from './components/customNavBar';
import './App.css'

export default function App() {
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