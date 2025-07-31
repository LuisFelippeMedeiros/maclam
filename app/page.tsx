import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre";
import Empreendimentos from "./components/Empreendimentos/Empreendimentos"; // Importe o novo componente
// import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";

// Dados do Moema Trade Center
const moemaInfo = {
  preTitle: "MOEMA COMFORT HOTEL & TRADE CENTER",
  title: "O Primeiro empreendimento mixed da região",
  description: [
    "Escritórios e hotelaria no mesmo empreendimento.",
    "Implantação e fachada que ressaltam esta integração e a pluralidade de atividades.",
    "Próximo ao Parque Ibirapuera e ao Aeroporto de Congonhas.",
    "No Moema Comfort Hotel & Trade Center, o Grupo Maclam participou do Negócio Imobiliário que deu origem ao empreendimento.",
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
  images: [
    "/office/01.jpg", // Lembre-se de criar essa pasta e imagens
    "/office/02.jpg",
    "/office/03.jpg",
  ],
  showMaclamLogo: false, // Neste, não mostramos o logo
};

export default function Home() {
  return (
    <main>
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre">
        <Sobre />
      </section>

      {/* Seção Maclam Office (layout normal) */}
      <section id="maclam-office">
        <Empreendimentos
          preTitle={maclamOfficeInfo.preTitle}
          title={maclamOfficeInfo.title}
          description={maclamOfficeInfo.description}
          images={maclamOfficeInfo.images}
          showMaclamLogo={maclamOfficeInfo.showMaclamLogo}
        />
      </section>

      {/* Seção Moema Trade Center (com layout reverso) */}
      <section id="moema-trade-center">
        <Empreendimentos
          preTitle={moemaInfo.preTitle}
          title={moemaInfo.title}
          description={moemaInfo.description}
          images={moemaInfo.images}
          showMaclamLogo={moemaInfo.showMaclamLogo}
          reverseLayout={true} // Invertendo o layout para variar
        />
      </section>

      {/* <Contato /> */}
      <Footer />
    </main>
  );
}
