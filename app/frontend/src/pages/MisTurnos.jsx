import React from 'react';
import { useTurnos } from '../hooks/useTurnos';
import TarjetaTurno from '../components/TarjetaTurno/TarjetaTurno';
import ModelConfirmacion from '../components/Modal/ModalConfirmacion'; 
import { useModal } from '../hooks/useModal'; 
import Select from '../components/Select/select';
import styles from './MisTurnos.module.css';

function MisTurnos() {
    const { turnos, filtro, setFiltro, cargando, error, cancelar, cambiarEstadoTurno } = useTurnos();

    const { isOpen, openModal, closeModal, data: idParaEliminar } = useModal();
    const confirmarEliminacion = async () => {
        console.log("Turno a eliminar con ID:", idParaEliminar);
        try {
            await cancelar(idParaEliminar);
            closeModal();
        } catch (err) {
            console.error("Error al cancelar el turno:", err);
            // Aquí podrías mostrar un mensaje de error al usuario si quieres
        }
    }

    const opcionesFiltro = [
        { label: 'Pendiente de Confirmación', value: 'Pendientes' },
        { label: 'Turnos Confirmados', value: 'Confirmados' },
        { label: 'En Transcurso', value: 'Activos' },
        { label: 'Turnos Finalizados', value: 'No Activos' }
    ];
    if (error) return <p className={styles.error}>Error: {error}</p>;

    return (
        
        <div className={styles.contentWrapper}>
            
            {/* Header con botón de Nuevo Turno */}
            <header className={styles.topHeader}>
                <div className={styles.titleArea}>
                    <h1>Mis Turnos</h1>
                    <p>Gestiona tus próximas citas médicas y revisa tu historial.</p>
                </div>
                <button className={styles.btnNuevoTurno}>
                    <span className="material-symbols-outlined">add</span>
                    <span>Nuevo Turno</span>
                </button>
            </header>

            {/* Barra de Filtros y Buscador */}
            <div className={styles.filterBar}>
                <div className={styles.filterGroups}>
                    {opcionesFiltro.map((opcion) => (
                        <button
                            key={opcion.value}
                            onClick={() => setFiltro(opcion.value)}
                            className={`${styles.filterBtn} ${filtro === opcion.value ? styles.filterBtnActive : ''}`}
                        >
                            <span className="material-symbols-outlined" style={{fontSize: '18px'}}>
                                {opcion.icon}
                            </span>
                            {opcion.label}
                        </button>
                    ))}
                </div>
                
                <div className={styles.searchWrapper}>
                    <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
                    <input 
                        type="text" 
                        className={styles.searchInput} 
                        placeholder="Buscar por médico o especialidad..."
                    />
                </div>
            </div>

            {/* Listado de Turnos */}
            {cargando ? (
                <p>Cargando tus turnos...</p>
            ) : (
                <>
                    {turnos.length === 0 ? (
                        <p>No tenés turnos agendados en esta categoría.</p>
                    ) : (
                        <div className={styles.gridTurnos}>
                            {turnos.map((turno) => (
                                <TarjetaTurno 
                                    key={turno.id} 
                                    turnoData={turno}                             
                                    onCancelar={() => openModal(turno.id)}
                                    onConfirmarTurno ={() => cambiarEstadoTurno(turno.id, 'Confirmado')}
                                />
                            ))}
                        </div>
                    )}
                </>
            )}
               

            <ModelConfirmacion
                isOpen={isOpen}
                onClose={closeModal}
                onConfirm={confirmarEliminacion}
                titulo="Confirmar Cancelación"
                mensaje="¿Estás seguro que querés cancelar este turno?"
            />
        </div>
    );
}
export default MisTurnos;