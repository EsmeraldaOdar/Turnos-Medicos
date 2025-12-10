import React from 'react';
import Navbar from './navbar'; 
import './layout.css'; 

// "children" es una prop especial de React. 
// Representa "lo que sea que pongas adentro de este componente".
function Layout({ children }) {
    return (
        <div className="layout-container">
            {/* 1. El Navbar siempre fijo a la izquierda */}
            <Navbar />
            
            {/* 2. El contenido principal a la derecha */}
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default Layout;