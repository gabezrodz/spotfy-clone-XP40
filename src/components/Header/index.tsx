import "./styles.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <div >
          <img
            src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png"
            alt="Logo do spotfy"
            className="logo"
          />
          <h3>Spotfy</h3>
        </div>
        <ul>
          <li>Premium</li>
          <li>Suporte</li>
          <li>Baixar</li>
          <li>|</li>
          <li>Inscrever-se</li>
          <li>Entrar</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
