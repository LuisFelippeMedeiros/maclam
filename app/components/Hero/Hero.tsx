import styles from "./Hero.module.css";

const Hero = () => {
  // O mesmo link do WhatsApp que definimos no componente Contato
  const numeroWhatsApp = "5511999999999"; // Lembre-se de usar o número real do cliente
  const mensagemPadrao =
    "Olá! Visitei o site do Grupo Maclam e gostaria de mais informações.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagemPadrao
  )}`;

  return (
    <div className={styles.heroContainer}>
      {/* Vídeo de Fundo */}
      <video
        src="/banner-video.mp4" // Coloque seu vídeo na pasta /public
        poster="/video-fallback.png"
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Mais que uma sede. Um ativo estratégico
        </h1>
        <p className={styles.subtitle}>
          Lajes corporativas de 140 m² e 280 m² à venda na Av. Ibirapuera,
          projetadas para valorizar e potencializar o seu negócio.
        </p>
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Entre em Contato
        </a>
      </div>
    </div>
  );
};

export default Hero;
