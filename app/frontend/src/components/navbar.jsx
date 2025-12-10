import styles from './navbar.module.css';
import React, { useState } from 'react';
import { MdHome, MdAccessTime, MdEventAvailable, MdAccountCircle, MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.header}>
                <div className={styles.title}>Turnos Médicos</div>
                <button className={styles['menu-toggle']} onClick={toggleMenu}>
                    {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
                </button>
            </div>

            <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
                <Link to="/" className={styles['menu-item']}> <MdHome size={20}/> Inicio</Link>
                <Link to="/turnos" className={styles['menu-item']} onClick={ () => setIsOpen(false)}> <MdAccessTime size={20}/> Mis Turnos</Link>
                <Link to="/agendar" className={styles['menu-item']} onClick={ () => setIsOpen(false)}> <MdEventAvailable size={20}/> Agendar Turno</Link>
                <Link to="/perfil" className={styles['menu-item']} onClick={ () => setIsOpen(false)}> <MdAccountCircle size={20}/> Mi Perfil</Link>
            </div>
        </nav>
    );
}
export default Navbar;