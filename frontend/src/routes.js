import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/App';
import HomeScreen from './components/screens/HomeScreen';
import DoctorScreen from './components/screens/DoctorScreen';



export default (
  <Route path="/" component={HomeScreen}>
    <IndexRoute component={HomeScreen} />
    <Route path="/home" component={HomeScreen} />
    <Route path="/doctor/:id" component={DoctorScreen} />
  </Route>
);