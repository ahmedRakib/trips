import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import  Trips  from '../src/components/Trip/Trips';
import { Create } from '../src/components/Trip/Create';
import { Update } from '../src/components/Trip/Update';
import { Delete } from '../src/components/Trip/Delete'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/trips' component={Trips} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/update/:id' component={Update} />
        <Route exact path='/delete/:id' component={Delete} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
