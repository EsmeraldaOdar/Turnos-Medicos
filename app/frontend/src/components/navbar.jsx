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
                <div className={styles.profileContainer}>
                    <div 
                        className={styles.avatar} 
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2Fp9bNz5S0EYucxOWTTFBr8SFmQVzpXX1WzTYRSXgpo0bSai1BMhdQoPiorKl8MKkx6ihucB4ZbyB411qiAvGS61ISLTt-dnIrfqU_D3mWYLhv3slWkHqdnmpOTSylxkFQ9r5Dvcs5YQOs-K_QpTqwm6L26P2CpvxUXi4QIgtoXyebTqB0jgce-fJWNRgx4o0-sT8IFx9zQLaH9id2zjmgJ3jvZrr7vvd1UxB-U80AdAHja3gdSEiFUctkec_TV-n56XaXm41xXDG")' }}
                    ></div>
                    <div className={styles.brandInfo}>
                        <h1 className={styles.brandName}>EsmeMedics</h1>
                        <p className={styles.portalTag}>Portal Paciente</p>
                    </div>
                </div>
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