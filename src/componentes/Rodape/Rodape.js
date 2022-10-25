import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="fundo-wrapper">
        <img src="/imagens/fundo.png" alt="fundo" />
      </div>
      <div className="logo-wrapper">
        <img src="/imagens/logo.png" alt="organo logo" />
      </div>
      <nav className="nav-wrapper">
        <li>
          <a href="https://www.facebook.com/">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com/">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/">Instagram</a>
        </li>
      </nav>
    </footer>
  );
};

export default Rodape;
