import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index.js';
import CadastroVideo from './pages/cadastro/video/'
import CadastroCategoria from './pages/cadastro/categoria/';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

//TODO
const Pagina404 = ()=>(<div>Página não encontrada</div>)

//Renderiza o react dentro da tag root do index.html
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

//Roteamento para SPA
<BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
