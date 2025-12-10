import React from 'react';
import { MdEvent, MdAccessTime, MdPerson } from 'react-icons/md';
import styles from './TarjetaTurno.module.css';

function TarjetaTurno({ turnoData }) {
    // Usamos Destructuring para extraer solo los campos que vamos a MOSTRAR
    const { 
        Fecha, 
        Hora, 
        Nombre_Medico, 
        Nombre_Especialidad, 
        estado 
    } = turnoData;

    const estadoClase = {
        'Confirmado': styles.confirmado,
        'Cancelado': styles.cancelado,
        'Pendiente': styles.pendiente,
        'Atendido': styles.atendido,
        'Finalizado': styles.finalizado,
        'Ausente': styles.ausente,
        'Anunciado': styles.anunciado,
        'default': styles.neutro
    };
    const claseEstado = estadoClase[estado] || estadoClase['default'];
    
    return (
        <div className={styles.tarjeta}>
            <div className={styles.detalle}>
                <MdPerson size={24} className={styles.icono} />
                <span className={styles.texto}>{Nombre_Medico} - {Nombre_Especialidad}</span>     
            </div>
            <div className={styles.detalle}>
                <MdEvent size={24} className={styles.icono} />
                <span className={styles.texto}>{Fecha}</span>
            </div>

            <div className={styles.detalle}>
                <MdAccessTime size={24} className={styles.icono} />
                <span className={styles.texto}>{Hora}</span>
            </div>
            <div className={styles.estado}>
                Estado: <span className={claseEstado}>{estado}</span>
            </div>
        </div>
    );
}

export default TarjetaTurno;