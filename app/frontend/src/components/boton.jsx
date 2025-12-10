function Boton({texto, esPrimario}) {
    const estiloBoton = {
        backgroundColor: esPrimario ? '#007bff' : '#6c757d', // Azul o Gris
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px'
    };

    return (
      <button style={estiloBoton}>
        {texto}
      </button>  
    );
}
export default Boton;