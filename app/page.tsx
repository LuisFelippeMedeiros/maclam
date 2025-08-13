import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre";
import Empreendimentos from "./components/Empreendimentos/Empreendimentos";
// import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery"; // 1. Import da Galeria

// ==================================================================
//  DADOS DO MOEMA TRADE CENTER ATUALIZADOS AQUI
// ==================================================================
const moemaInfo = {
  preTitle: "MOEMA TRADE CENTER",
  title: "Um ativo estratégico para quem valoriza presença e performance.",
  description: [
    "O Moema Trade Center é um edifício corporativo de alto padrão, estrategicamente localizado na Av. Ibirapuera, 2144 – em Moema, uma das regiões mais valorizadas e conectadas de São Paulo.",
    "Defronte à estação Moema do metrô — é só atravessar a rua. Além disso, o empreendimento está próximo ao Shopping Ibirapuera, Parque Ibirapuera, Aeroporto de Congonhas e a poucos minutos da Av. Faria Lima, garantindo mobilidade total para empresas que valorizam presença e agilidade.",
    "As lajes têm quase 280 m², divididas em dois escritórios independentes - ~140 m² - que podem ser facilmente unificados, oferecendo flexibilidade para negócios de diferentes portes. São dois elevadores sociais, cinco vagas de garagem por conjunto, estacionamento para visitantes, ar-condicionado central com controle individual e sala de reunião compartilhada.",
    "O Moema Trade Center entrega mobilidade, conveniência e imagem corporativa.",
    "Mais que uma sede. Um ativo estratégico para quem valoriza presença e performance.",
  ],
  images: [
    "/moema/01.jpg",
    "/moema/02.jpg",
    "/moema/03.jpg",
    "/moema/04.jpg",
    "/moema/05.jpg",
  ],
  showMaclamLogo: true,
};

// Dados (placeholder) para o Maclam Office para demonstrar a reutilização
const maclamOfficeInfo = {
  preTitle: "MACLAM OFFICE",
  title: "Modernidade e sofisticação para o seu negócio",
  description: [
    "Localizado no coração financeiro da cidade, o Maclam Office oferece uma infraestrutura de ponta.",
    "Com salas comerciais de alto padrão e design inovador, é o ambiente perfeito para empresas que buscam crescimento e visibilidade.",
  ],
  images: ["/office/01.jpg", "/office/02.jpg", "/office/03.jpg"],
  showMaclamLogo: false,
};

export default function Home() {
  return (
    <main>
      <Header />
      <section id="inicio">
        <Hero />
      </section>

      {/* Seção Maclam Office (layout normal) */}
      {/* <section id="maclam-office">
        <Empreendimentos
          preTitle={maclamOfficeInfo.preTitle}
          title={maclamOfficeInfo.title}
          description={maclamOfficeInfo.description}
          images={maclamOfficeInfo.images}
          showMaclamLogo={maclamOfficeInfo.showMaclamLogo}
        />
      </section> */}

      {/* Seção Moema Trade Center (com layout reverso e copy atualizada) */}
      <section id="moema-trade-center">
        <Empreendimentos
          preTitle={moemaInfo.preTitle}
          title={moemaInfo.title}
          description={moemaInfo.description}
          images={moemaInfo.images}
          showMaclamLogo={moemaInfo.showMaclamLogo}
          reverseLayout={true}
        />
      </section>

      <section id="sobre">
        <Sobre />
      </section>

      {/* 2. Seção da Galeria adicionada aqui */}
      <section id="galeria">
        <Gallery />
      </section>

      {/* <Contato /> */}
      <Footer />
    </main>
  );
}
