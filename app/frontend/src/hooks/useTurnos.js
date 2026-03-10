import React, {useState, useEffect, useCallback, useMemo}  from 'react';
import {obtenerMisTurnos, cancelarTurno} from '../services/turnosService';

const TurnosActivos = ["Confirmado", "Pendiente", "Anunciado", "Atendido"];
const ordenarTurnos = (turnos) => {
    const activos = [];
    const noActivos = [];

    turnos.forEach(turno => {
        if (TurnosActivos.includes(turno.estado)) {
            activos.push(turno);
        } else {
            noActivos.push(turno);
        }
    });

    return [...activos, ...noActivos];
}

const filtrarTurnos = (turnos, filtro) => {
    const TurnosEnTranscurso = ["Atendido", "Anunciado"];
    if (filtro === 'Activos') {
        return turnos.filter(t => TurnosEnTranscurso.includes(t.estado));
    } 
    if (filtro === 'No Activos') {
        return turnos.filter(t => !TurnosActivos.includes(t.estado));
    }
    if (filtro === 'Pendientes') {
        return turnos.filter(t => t.estado === 'Pendiente');
    }
    if (filtro === 'Confirmados') {
        return turnos.filter(t => t.estado === 'Confirmado');
    }
    return turnos; // Sin filtro
};

// Naming Convention: Los hooks SIEMPRE deben empezar con "use"
export const useTurnos = () => {
    const [turnos, setTurnos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState('Todos'); // 'Todos', 'Activos', 'No Activos'
    
 
// Envolvemos la llamada en una función que podamos reutilizar
    const traerDatos = useCallback(async () => {
        try {
            setCargando(true);
            const data = await obtenerMisTurnos();
            setTurnos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }, []);

    // Llamamos a esa función al inicio
    useEffect(() => {
        traerDatos();
    }, [traerDatos]);

    
    const turnosProcesados = useMemo(() => {
        const filtrados = filtrarTurnos(turnos, filtro);
        return ordenarTurnos(filtrados);
    }, [turnos, filtro]);


    const cambiarEstadoTurno = (idTurno, nuevoEstado) => {
        setTurnos(prevTurnos => 
            prevTurnos.map(t =>
                t.id === idTurno ? { ...t, estado: nuevoEstado } : t
            )
        );
    };

    const cancelar = async (idParaEliminar) => {
        if (!idParaEliminar) return;
        try {
            await cancelarTurno(idParaEliminar);
            console.log(`Turno con ID ${idParaEliminar} cancelado.`);
            // Recargar los turnos después de la eliminación
            await traerDatos();
        } catch (err) {
            console.error("Error al cancelar el turno:", err);
            setError(err?.message || "Error desconocido al cancelar el turno.");
            throw err; // Re-lanzamos el error para que el componente pueda manejarlo si es necesario
        }      
    };

    // Devolvemos la función 'recargar' para que el componente la pueda usar
    return { 
        turnos: turnosProcesados, 
        filtro, setFiltro,
        cargando, 
        error, 
        recargar: traerDatos, 
        cancelar,
        cambiarEstadoTurno
    };
}