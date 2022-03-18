import "./styles.css";
import Lista from "../Lista";
import BotaoSocial from "../BotaoSocial";
import IconInsta from "../../assets/images/instagram.png";
import IconTwitter from "../../assets/images/twitter.png";
import IconFacebook from "../../assets/images/facebook.png";

const listaEmpresa = [
  {
    nome: "Sobre",
    link: "#",
  },
  {
    nome: "Empregos",
    link: "#",
  },
  {
    nome: "For the Record",
    link: "#",
  },
];

const listaComunidades = [
  {
    nome: "Para Artistas",
    link: "#",
  },
  {
    nome: "Desenvolvedores",
    link: "#",
  },
  {
    nome: "Publicidade",
    link: "#",
  },
  {
    nome: "Investidores",
    link: "#",
  },
  {
    nome: "Fornecedores",
    link: "#",
  },
];

const listaLinks = [
  {
    nome: "Suporte",
    link: "#",
  },
  {
    nome: "Player da Web",
    link: "#",
  },
  {
    nome: "Aplicativo móvel grátis",
    link: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="logo-box">
          <img
            src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png"
            alt="Logo do spotfy"
            className="logo"
          />
          <h3>Spotfy</h3>
        </div>
        <Lista titulo="EMPRESA" itens={listaEmpresa} />
        <Lista titulo="COMUNIDADES" itens={listaComunidades} />
        <Lista titulo="LINKS ÚTEIS" itens={listaLinks} />
        <div className="redes">
          <BotaoSocial link={IconInsta} titulo="insta" />
          <BotaoSocial link={IconTwitter} titulo="twitter" />
          <BotaoSocial link={IconFacebook} titulo="facebook" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
