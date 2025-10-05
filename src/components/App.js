import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/surveys' component='Dashboard'></Route>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
