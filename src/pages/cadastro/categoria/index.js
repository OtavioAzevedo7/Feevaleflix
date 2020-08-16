import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageTemplate from '../../../Components/PageTemplate';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import useForm from '../../../Hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  // Retorna variavel e function para atualiza-la

  const valoresIniciais = {
    titulo: '',
    descricao: '',
  };

  // Custom hooks
  const { fnHandleChange, valores, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  // const [valores, setValores] = useState([valoresIniciais]);
  const history = useHistory();

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:1234/categorias'
      : 'https://feevaleflix.herokuapp.com/categorias';
      // Chamada AJAX da "API" para consumir o backend "dbJson" (json server)
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  return (
    <PageTemplate>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={function fnHandleSubmit(i) {
        i.preventDefault();
        // setCategorias([
        //   ...categorias,
        //   valores,
        // ]);

        categoriasRepository.Create({
          titulo: valores.titulo,
          descricao: valores.descricao,
          cor: '#fab800',
          font_color: 'var(--black)',
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
        // Reseta form
        clearForm();
      }}
      >

        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={fnHandleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={fnHandleChange}
        />

        <Button>Enviar</Button>

        {categorias.length === 0 && (
        <div className="spinner" />
        )}
      </form>

      <br />
      <br />
      <h3>Categorias Existentes</h3>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <br />
      <br />

      <Link to="/">
        <i>Voltar para página inicial</i>
      </Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
