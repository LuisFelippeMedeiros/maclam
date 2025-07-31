import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerBg}>
      <div className={styles.footerContainer}>
        {/* Coluna 1: Logo e Social */}
        <div className={styles.infoColumn}>
          <Link href="#inicio">
            <Image
              src="/logo.png"
              alt="Logo Grupo Maclam"
              width={80} // Dimensões quadradas
              height={80}
              className={styles.logo}
            />
          </Link>
          <p className={styles.slogan}>
            Design contemporâneo e empreendimentos que se destacam no contexto
            urbano.
          </p>
          <div className={styles.socials}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              {/* Ícone SVG do Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              {/* Ícone SVG do Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {/* Ícone SVG do LinkedIn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className={styles.linksColumn}>
          <h3 className={styles.footerTitle}>Navegação</h3>
          <ul>
            <li>
              <Link href="#inicio">Início</Link>
            </li>
            <li>
              <Link href="#sobre">Sobre</Link>
            </li>
            <li>
              <Link href="#maclam-office">Maclam Office</Link>
            </li>
            <li>
              <Link href="#moema-trade-center">Moema Trade Center</Link>
            </li>
            <li>
              <Link href="#contato">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Mapa */}
        <div className={styles.mapColumn}>
          <h3 className={styles.footerTitle}>Nossa Localização</h3>
          <div className={styles.mapWrapper}>
            {/* INSTRUÇÃO PARA O CLIENTE: Substituir este iframe pelo do Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.175941935826!2d-46.65651718440683!3d-23.56221196749219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x206c48064161863d!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886578796!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Grupo Maclam. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
