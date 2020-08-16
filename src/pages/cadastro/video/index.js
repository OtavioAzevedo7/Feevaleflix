import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageTemplate from '../../../Components/PageTemplate';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import useForm from '../../../Hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { fnHandleChange, valores } = useForm({
    titulo: 'Titulo do Video',
    url: 'https://www.youtube.com/watch?v=K20gqK-F2xs',
    categoria: 'Categoria do Video',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageTemplate>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find(
          (categoria) => categoria.titulo === valores.categoria,
        );

        videosRepository.Create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={fnHandleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onChange={fnHandleChange}
        />
        <small>
          <Link to="/cadastro/categoria">
            Desejo cadastrar uma nova categoria
          </Link>
        </small>
        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={fnHandleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

    </PageTemplate>
  );
}

export default CadastroVideo;
