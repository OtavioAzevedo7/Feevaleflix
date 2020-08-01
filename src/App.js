import React from 'react';
import styled from 'styled-components';
import Menu from './Components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';

const AppWrapper = styled.div`
  background-color:var(--backgroundApp);
`;

function App() {
  return (
    <AppWrapper style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        //videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        videoDescription={"Dia 30/04, às 17h, teremos a live Saúde mental em época de quarentena, como lidar com a ansiedade com os psicólogos Roberta da Silveira e Henrique Zimmermann. #FeevaleLive"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      {/* <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       */}

      <Footer />
    </AppWrapper>
  );
}

export default App;