import "./styles.css";

function Footer() {
  return (
    <footer>
      <nav>
        <section>
          <div>
            <img
              src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png"
              alt="Logo do spotfy"
              className="logo"
            />
            <h3>Spotfy</h3>
          </div>
          <ul>
            <h4>Empresa</h4>
            <li>Sobre</li>
            <li>Empregos</li>
            <li>For the Record</li>
          </ul>
          <ul>
            <h4>Comunidades</h4>
            <li>Para Artistas</li>
            <li>Desenvolvedores</li>
            <li>Publicidades</li>
            <li>Investidores</li>
            <li>Fornecedores</li>
          </ul>
          <ul>
            <h4>Links Úteis</h4>
            <li>Suporte</li>
            <li>Player da Web</li>
            <li>Aplicativo Móvel Grátis</li>
          </ul>
        </section>
        <section>
          <ul className="redes-sociais">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </section>
      </nav>
    </footer>
  );
}

export default Footer;
