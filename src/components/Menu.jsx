import React from 'react';
import "./Components.css"

export const Menu = ({ handleTab }) => {
    return (
        <nav className='nav'>
            <ul className='tab'>
                <li>
                    <a onClick={() => handleTab("task")} href="#" style={{ textDecoration: 'none', color: '#333' }}>Tareas</a>
                </li>
                <li>
                    <a onClick={() => handleTab("form")} href="#" style={{ textDecoration: 'none', color: '#333' }}>Formulario</a>
                </li>
            </ul>
        </nav>
    );
};