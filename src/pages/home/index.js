import React, { useEffect, useState } from 'react';
import Menu from '../../Components/Menu';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import PageTemplate from '../../Components/PageTemplate';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <PageTemplate paddingAll={0}>
      <Menu />

      {dadosIniciais.length === 0 && (<div className="spinner" />)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageTemplate>
  );
}

export default Home;
