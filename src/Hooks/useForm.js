import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState([valoresIniciais]);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function fnHandleChange(i) {
    setValor(
      i.target.getAttribute('name'),
      i.target.value,
    );
  }

  function clearForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    fnHandleChange,
    clearForm,
  };
}

export default useForm;
