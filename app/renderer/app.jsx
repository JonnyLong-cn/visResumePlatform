import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <div>可视化简历平台</div>
          <div>这是 Electron + React </div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));