import React from "react";
import react from "../assets/react.svg";
import "./Components.css";
import { NavLink } from "react-router";

export const Menu = () => {
    const navItems = [
        {
            "name": "App",
            "url": "/",
        },
        {
            name: "Users",
            url: "/users",
        },
        {
            name: "To-Do List",
            url: "/todos",
        },
    ];
    return (

        <nav className="nav">
            <ul className="ul">
                <li>
                    <img src={react} alt="react" />
                </li>
                <li>
                    {navItems.map((item) => {
                        return (
                            <NavLink key={item.name} to={item.url}>
                                {item.name}
                            </NavLink>
                        );
                    })}
                </li>
            </ul>
        </nav>
    );
};
