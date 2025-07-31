import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  // O mesmo link do WhatsApp que definimos no componente Contato
  // É uma boa prática centralizar essa informação no futuro, mas por enquanto podemos repetir.
  const numeroWhatsApp = "5511999999999"; // Lembre-se de usar o número real do cliente
  const mensagemPadrao =
    "Olá! Visitei o site do Grupo Maclam e gostaria de mais informações.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagemPadrao
  )}`;

  return (
    <div className={styles.heroContainer}>
      {/* Imagem de Fundo */}
      <Image
        src="/Banner.jpg"
        alt="Empreendimento de alto padrão do Grupo Maclam"
        fill // 'fill' faz a imagem preencher o contêiner pai
        style={{ objectFit: "cover" }} // 'cover' garante que a imagem cubra tudo sem distorcer
        quality={90} // Qualidade da imagem (padrão é 75)
        priority // Essencial para o banner principal ser carregado rapidamente
      />

      {/* Overlay para escurecer a imagem e melhorar a legibilidade do texto */}
      <div className={styles.overlay}></div>

      {/* Conteúdo de Texto e Botão */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Cada detalhe é cuidadosamente projetado para oferecer uma experiência
          única.
        </h1>
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
