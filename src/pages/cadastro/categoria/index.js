import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../Components/PageTemplate';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';

function CadastroCategoria() {
  // Retorna variavel e function para atualiza-la

  const valoresIniciais = {
    nome: '',
    descricao: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState([valoresIniciais]);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function fnHandleChange(i) {
    // const { getAttribute, value } = i.target;

    setValor(
      i.target.getAttribute('name'),
      i.target.value,
    );
  }

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
        setCategorias([
          ...categorias,
          valores,
        ]);

        // Reseta form
        setValores(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={valores.nome}
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
        <div>
          Loading...
        </div>
        )}
      </form>

      <ul>
        {categorias.map((categorias, indice) => (
          <li key={`${categorias}${indice}`}>
            {categorias.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
