"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const Gallery = () => {
  // Gera os caminhos para 15 imagens, de gallery-1.jpg a gallery-15.jpg
  const imagePaths = Array.from(
    { length: 15 },
    (_, i) => `/gallery/gallery-${i + 1}.jpg`
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Função para reiniciar o timer do autoplay
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1
        ),
      3000 // Muda a imagem a cada 3 segundos
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, imagePaths.length]);

  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>
        Conheça os detalhes do nosso empreedimento
      </h2>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imagePaths.map((path, index) => (
            <div className={styles.carouselItem} key={index}>
              <Image
                src={path}
                alt={`Imagem da Galeria ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 3} // Prioriza o carregamento das primeiras imagens
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
