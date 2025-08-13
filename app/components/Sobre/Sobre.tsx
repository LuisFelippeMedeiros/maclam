import Image from "next/image";
import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={styles.sobreContainer}>
      {/* Coluna da Imagem */}
      <div className={styles.imageWrapper}>
        <Image
          src="/maclam-office/maclam-office.jpg"
          alt="Edifício corporativo moderno da Maclam Office"
          width={600}
          height={750}
          className={styles.image}
        />
      </div>

      {/* Coluna do Texto com a hierarquia de títulos ajustada */}
      <div className={styles.textWrapper}>
        {/* O antigo pré-título agora é o título principal. Removemos o span. */}
        <h2 className={styles.title}>SOBRE A MACLAM OFFICE</h2>
        <div className={styles.paragraphs}>
          <p>
            Há mais de 40 anos, a Maclam Office vem consolidando sua trajetória
            como referência no desenvolvimento de edifícios corporativos
            inteligentes em São Paulo. Com forte atuação no mercado imobiliário
            comercial, a empresa se destaca pela entrega de empreendimentos que
            aliam localização estratégica, infraestrutura de alto padrão e
            grande potencial de valorização.
          </p>
          <p>
            Nosso propósito é criar espaços que impulsionam negócios, oferecendo
            soluções modernas, funcionais e adaptadas às novas formas de
            trabalhar.
          </p>
          <p>
            Ao longo de mais de quatro décadas, reunimos credibilidade,
            experiência e uma visão de futuro que nos permite acompanhar as
            transformações do mercado e oferecer produtos que fazem sentido hoje
            — e continuarão fazendo no amanhã.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
