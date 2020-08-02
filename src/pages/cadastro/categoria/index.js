import React from 'react';
import {Link} from 'react-router-dom';
import PageTemplate from '../../../Components/PageTemplate';

function CadastroCategoria(){

    return(
        <PageTemplate>
            <h1>Cadastro de Categoria</h1>
            
            <Link to ="/">
                Ir para Home
            </Link>
        </PageTemplate>
    )
}

export default CadastroCategoria;