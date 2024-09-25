import "./session.css";

function Logear() {
  return (
    <>
      <h1 id="logo">Paco´s</h1>
      <div class="logear">
        <h1 class="textoInicar">Inicio de sesión</h1>
        <form method="post">
          <div className="nombreUsua">
            <input type="text" required />
            <label>Nombre de Usuario</label>
          </div>
          <div className="contrasena">
            <input type="password" required />
            <label>Contraseña</label>
          </div>
          <input type="submit" value="Iniciar" />
          <input type="submit" value="Registrarse" />
          <div class="recordar">¿Olvido su contraseña?</div>
        </form>
      </div>
    </>
  );
}

export default Logear;
