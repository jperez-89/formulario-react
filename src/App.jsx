import { Outlet } from "react-router";
import { CustomNav } from "./components/Base/CustomNav";
import { SignIn } from './components/Auth/LogIn.jsx'
import { useAuth } from "./context/AuthContext.jsx";
import './App.css'

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
  const { token, handleLogOut } = useAuth()

  return (
    <>
      {token.length >= 1 ?
        <>
          <header>
            <CustomNav navItems={navItems} handleLogOut={handleLogOut} />
          </header>
          <main className="bg-amber-50">
            <Outlet />
          </main>
        </>
        :
        <SignIn />
      }
    </>
  )
}