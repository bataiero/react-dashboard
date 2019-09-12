import React from 'react';

import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuSuperior/>

      <div class="container-fluid">
    <div class="row">
        <div class="col">
            
            <Switch>
              <Route path="/consultas" exact component={Consultas} />
              <Route path="/faturamento" component={Faturamento} />
              <Route path="/" exact component={Resumo} />                             

          </Switch>
        </div>
    </div>
</div>




    </div>
  );
}

export default App;
