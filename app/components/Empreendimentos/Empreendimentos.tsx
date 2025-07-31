import Image from "next/image";
import styles from "./Empreendimentos.module.css";

// Definimos as propriedades que o componente aceitará
type EmpreendimentoProps = {
  preTitle: string;
  title: string;
  description: string[]; // Um array de parágrafos
  images: string[]; // Um array com os caminhos das imagens
  showMaclamLogo?: boolean; // Propriedade opcional
  reverseLayout?: boolean; // Propriedade opcional para alternar o layout
};

const Empreendimentos = ({
  preTitle,
  title,
  description,
  images,
  showMaclamLogo = false,
  reverseLayout = false,
}: EmpreendimentoProps) => {
  const containerClasses = `${styles.container} ${
    reverseLayout ? styles.reverse : ""
  }`;

  return (
    <div className={containerClasses}>
      {/* Coluna de Texto */}
      <div className={styles.textWrapper}>
        <span className={styles.preTitle}>{preTitle}</span>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.description}>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {showMaclamLogo && (
          <div className={styles.negocioImobiliario}>
            <span>Negócio Imobiliário:</span>
            <Image
              src="/logo.png"
              alt="Logo Grupo Maclam"
              width={100}
              height={100}
            />
          </div>
        )}
      </div>

      {/* Coluna da Galeria de Imagens */}
      <div className={styles.galleryWrapper}>
        {images.map((imgSrc, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={imgSrc}
              alt={`${preTitle} - Imagem ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Empreendimentos;
