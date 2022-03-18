import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <div>
          <img
            src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png"
            alt="Logo do spotfy"
            className="logo"
          />
          <h3>Spotfy</h3>
        </div>
        <ul>
          <Link to="">Premium</Link>
          <Link to="/sobre">Suporte</Link>
          <Link to="">Baixar</Link>
          <Link to="">|</Link>
          <Link to="">Inscrever-se</Link>
          <Link to="">Entrar</Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
