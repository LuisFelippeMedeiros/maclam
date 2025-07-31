import Image from "next/image";
import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={styles.sobreContainer}>
      {/* Coluna da Imagem */}
      <div className={styles.imageWrapper}>
        <Image
          // SUBSTITUA PELA SUA IMAGEM QUANDO TIVER
          src="/Sobre.jpg" // Coloque uma imagem sua em /public com este nome
          alt="Detalhe arquitetônico de um prédio moderno"
          width={600}
          height={750}
          className={styles.image}
        />
      </div>

      {/* Coluna do Texto */}
      <div className={styles.textWrapper}>
        <span className={styles.preTitle}>GRUPO MACLAM</span>
        <h2 className={styles.title}>
          Criamos designs de qualidade e ideias inovadoras
        </h2>
        <div className={styles.paragraphs}>
          <p>
            Empresa especializada na realização de empreendimentos imobiliários
            originais em sua arquitetura, design e funcionalidade, sempre
            localizados em bairros que também tem algo de especial.
          </p>
          <p>
            Seus produtos se destacam no contexto urbano, representando
            excelentes opções de investimento e moradia.
          </p>
          <p>
            Funcionalidade e beleza sem exageros. Design contemporâneo. Linhas
            diferentes que instigam o olhar. Simplicidade que ousa. Que se
            destaca no caótico, no repetitivo. Que tem e confere identidade.
          </p>
          <p>Mais que roupagem ou verniz. Jeito de ser, existir e fazer.</p>
          <p>
            Em 2015, o Grupo Maclam realizou aquisição da Construtora [+]Casa
            para reforçar e aprofundar os valores de concepções arquitetônicas
            singulares e ousadas, reforçando seu espírito inquieto perante à
            realidade do contexto urbano paulistano.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
