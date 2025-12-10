const API_URL = 'http://localhost:8000'; 

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
                resolve([
                    {
                    // Propiedades del Turno
                    "Fecha": '2025-12-15',
                    "Hora": '10:00',
                    "Paciente_nroPaciente": 1001,
                    "Especialidad_Id": 5,
                    
                    // Propiedades Legibles (agregadas por el backend)
                    "Nombre_Especialidad": "Pediatría",
                    "Medico_Matricula": "M12345",
                    "Nombre_Medico": "Dr. Juan Pérez",
                    
                    // Estado (para la lógica de colores de la tarjeta)
                    "estado": "Confirmado" 
                },
                {
                    "Fecha": '2025-12-20',
                    "Hora": '14:30',
                    "Paciente_nroPaciente": 1002,
                    "Especialidad_Id": 2,
                    "Nombre_Especialidad": "Odontología",
                    "Medico_Matricula": "M98765",
                    "Nombre_Medico": "Dra. Ana Gómez",
                    "estado": "Pendiente" 
                },
                {
                    "Fecha": '2025-12-05',
                    "Hora": '09:00',
                    "Paciente_nroPaciente": 1003,
                    "Especialidad_Id": 5,
                    "Nombre_Especialidad": "Pediatría",
                    "Medico_Matricula": "M12345",
                    "Nombre_Medico": "Dr. Juan Pérez",
                    "estado": "Cancelado" 
                },
                ]);
            }, 1000);
        });
        
    } catch (error) {
        console.error(error);
        throw error;
    }
};