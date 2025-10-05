import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard}></Route>
          <Route path='/surveys/new' component={SurveyNew}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
