import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Inicio.module.css';

function Inicio() {
    const navigate = useNavigate();

    return (
        <div className={styles.contentWrapper}>
            {/* Header de Bienvenida */}
            <header className={styles.header}>
                <h1>Bienvenido a EsmeMedics</h1>
                <p>Gestiona tu salud de forma rápida, simple y segura.</p>
            </header>

            {/* Banner Principal / Hero Section */}
            <section className={styles.heroBanner}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className="material-symbols-outlined">medical_services</span>
                        <span>Atención Médica</span>
                    </div>
                    <h2>¿Necesitas ver a un médico?</h2>
                    <p>
                        Agenda tu próxima cita con nuestros especialistas en pocos pasos. 
                        Elige la especialidad, el médico y el horario que mejor se adapte a ti.
                    </p>
                    <button 
                        className={styles.btnAgendar}
                        onClick={() => navigate('/agendar')}
                    >
                        <span>Agendar Nuevo Turno</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </section>

            {/* Sección de Estado Actual */}
            <div className={styles.sectionEstado}>
                <div className={styles.sectionHeader}>
                    <h3 className={styles.sectionTitle}>
                        <span className="material-symbols-outlined">schedule</span>
                        Estado Actual
                    </h3>
                </div>

                {/* Estado Vacío (Empty State) */}
                <section className={styles.emptyStateContainer}>
                    <div className={styles.emptyStateCard}>
                        <div className={styles.emptyIcon}>
                            <span className="material-symbols-outlined">event_busy</span>
                        </div>
                        <div className={styles.emptyText}>
                            <p className={styles.emptyTitle}>No tienes turnos próximos</p>
                            <p className={styles.emptySubtitle}>
                                Cuando agendes una cita con un profesional, aparecerá destacada en esta sección.
                            </p>
                        </div>
                        <button 
                            className={styles.btnHistorial}
                            onClick={() => navigate('/turnos')}
                        >
                            <span className="material-symbols-outlined">history</span>
                            <span>Ver historial de turnos</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Inicio;