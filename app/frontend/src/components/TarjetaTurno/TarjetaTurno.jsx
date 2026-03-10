import React from 'react';
import { MdCalendarMonth, MdMoreVert, MdCheckCircle, MdSchedule, MdCampaign, MdDoneAll } from 'react-icons/md';
import styles from './TarjetaTurno.module.css';

function TarjetaTurno({ turnoData, onCancelar, onConfirmarTurno }) {
    const { Fecha, Hora, Nombre_Medico, Nombre_Especialidad, estado } = turnoData;

    // Mapeo de iconos y estilos por estado (Estilo Stitch)
    const configEstado = {
        'Confirmado': { icono: <MdCheckCircle />, clase: styles.badgeConfirmado },
        'Pendiente': { icono: <MdSchedule />, clase: styles.badgePendiente },
        'Anunciado': { icono: <MdCampaign />, clase: styles.badgeAnunciado },
        'Atendido': { icono: <MdDoneAll />, clase: styles.badgeAtendido },
        'default': { icono: <MdSchedule />, clase: styles.badgeDefault }
    };

    const config = configEstado[estado] || configEstado['default'];
    const esCancelable = !['Cancelado', 'Atendido', 'Finalizado', 'Ausente'].includes(estado);

    return (
        <div className={styles.tarjeta}>
            <div className={styles.headerCard}>
                <span className={`${styles.badge} ${config.clase}`}>
                    {config.icono}
                    {estado}
                </span>
                <button className={styles.btnOptions}><MdMoreVert /></button>
            </div>

            <div className={styles.bodyCard}>
                <div className={styles.iconDate}>
                    <MdCalendarMonth />
                </div>
                <div className={styles.dateTimeInfo}>
                    <span className={styles.fechaText}>{Fecha}</span>
                    <span className={styles.horaText}>{Hora} hs</span>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.footerCard}>
                <div className={styles.doctorAvatar}>
                    {Nombre_Medico.charAt(0)}
                </div>
                <div className={styles.doctorInfo}>
                    <p className={styles.doctorName}>{Nombre_Medico}</p>
                    <p className={styles.specialty}>{Nombre_Especialidad}</p>
                </div>
            </div>
            <div className={styles.actionButtons}>
            {esCancelable && (
                <button className={styles.btnCancelar} onClick={onCancelar}>
                    Cancelar Turno
                </button>
            )}
            {estado === 'Pendiente' && onConfirmarTurno && (
                <button className={styles.btnConfirmar} onClick={onConfirmarTurno}>
                    Confirmar Turno
                </button>
            )}
            </div>
        </div>
    );
}

export default TarjetaTurno;