import React, {useState}  from 'react';
import { useEffect } from 'react';
import {obtenerMisTurnos} from '../services/turnosService';
import TarjetaTurno from '../components/TarjetaTurno/TarjetaTurno';

function MisTurnos() {
    const [turnos, setTurnos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const traerDatos = async () => {
        try {
            const datosDelBackend = await obtenerMisTurnos();
            setTurnos(datosDelBackend);
        } catch (error) {
            console.error("Error trayendo los turnos", error);
            alert("Hubo un error cargando los turnos");
        } finally {
            setCargando(false); // Terminó de cargar (bien o mal)
        }
        };

        traerDatos();
    }, []);

    return (
        <div>
            <h2>Mis Turnos</h2>
            
            {cargando ? (
                <p>Cargando turnos...</p>
            ) : (
                // 3. Recorremos la lista (map) y creamos una Tarjeta por cada turno
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {turnos.map((turno) => (
                    <TarjetaTurno 
                    key={turno.id} // React necesita una clave única
                    turnoData={turno} // Le pasamos toda la info (objeto) del turno como prop
                    //Esta técnica mantiene el componente MisTurnos simple y delega la responsabilidad de la presentación al componente TarjetaTurno
                    />
                ))}
        </div>
        )}
    </div>
    );
}
export default MisTurnos;