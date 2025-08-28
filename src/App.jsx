import { Outlet } from "react-router";
import { CustomNavBar } from './components/Base/CustomNavBar';
import './App.css'
import { CustomNav } from "./components/Base/CustomNav";

const navItems = [
  {
    name: "Users",
    url: "/users",
  },
  {
    name: "To-Do List",
    url: "/todos",
  },
  {
    name: "Contact",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
];

export default function App() {
  return (
    <>
      <header>
        <CustomNav navItems={navItems} />
      </header>

      {/* Aqui se renderizan todas las ventanas */}
      <main>
        <Outlet />
      </main>
    </>
  )
}