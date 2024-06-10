const iniciarSesion = () => {
    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById('contraseña');
    console.log(usuario.value, contraseña.value);
    if (usuario.value === 'Juan' && contraseña.value === '0000') {
        alert('Inicio de sesión exitoso')
        window.location.href = "pago_Plus.html";
    } else {
        alert('usuario o contraseña incorrecta')
    }
};
