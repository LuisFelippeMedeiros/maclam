"use client"; // Necessário para usar hooks como useState

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Definição do link para o WhatsApp
  const numeroWhatsApp = "5511999999999"; // Use o número correto do cliente
  const mensagemPadrao =
    "Olá! Visitei o site do Grupo Maclam e gostaria de mais informações.";
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagemPadrao
  )}`;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="#inicio" onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Logo do Grupo Maclam"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* Navegação atualizada conforme solicitado */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
        <Link href="#inicio" onClick={closeMenu}>
          Início
        </Link>
        <Link href="#moema-trade-center" onClick={closeMenu}>
          Moema Trade Center
        </Link>
        <Link href="#maclam-office" onClick={closeMenu}>
          Maclam Office
        </Link>
        {/* Este link de contato abre o WhatsApp em uma nova aba */}
        <Link
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu} // Também fecha o menu mobile ao clicar
        >
          Contato
        </Link>
      </nav>

      {/* Botão Hambúrguer */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>
  );
};

export default Header;
