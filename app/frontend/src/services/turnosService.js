const API_URL = 'http://localhost:8000'; 

// "Base de Datos" temporal para simular operaciones
let MOCK_DB = [
    {
        "id": 1,
        "Fecha": '2025-12-15',
        "Hora": '10:00',
        "Nombre_Medico": "Dr. Juan Pérez",
        "Nombre_Especialidad": "Pediatría",
        "estado": "Confirmado"
    },
    {
        "id": 2,
        "Fecha": '2025-12-20',
        "Hora": '14:30',
        "Nombre_Medico": "Dra. Ana Gómez",
        "Nombre_Especialidad": "Odontología",
        "estado": "Pendiente"
    },
    {
        "id": 3, 
        "Fecha": '2025-12-05',
        "Hora": '09:00',
        "Nombre_Medico": "Dr. Juan Pérez",
        "Nombre_Especialidad": "Pediatría",
        "estado": "Cancelado"
    }
];

export const obtenerMisTurnos = async () => {
    try {
       // const response = await fetch(`${API_URL}/turnos`);  
        //if (!response.ok) {
        //    throw new Error('Error al obtener los turnos');
        //}
        //const data = await response.json();
        //return data;
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(MOCK_DB);
        }, 1000);
        });
        
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const cancelarTurno = async (idTurno) => {
    try {
        //const response = await fetch(`${API_URL}/turnos/${idTurno}`, 
        //    {method: 'DELETE'});
        //if (!response.ok) {
        //    throw new Error('Error al cancelar el turno');
        //}
        //return await response.json();

        // --- SIMULACIÓN (MOCK) ---
        console.log(`Simulando eliminación del turno ${idTurno} en el servidor...`);
        
        MOCK_DB = MOCK_DB.map(t => 
            t.id == idTurno 
                ? { ...t, estado: "Cancelado" } 
                : t
        );
        return new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
        console.error("Ocurrió un error al cancelar el turno:", error);
        throw error;
    }
};