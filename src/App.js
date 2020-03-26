import React from 'react';
import {Provider} from 'react-redux'
import {HashRouter as Router,Route} from 'react-router-dom' //hashrouter es lo mismo q el browser router sirve para asignar las rutas pero no causa problemas al subir el projecto a github
import './App.css';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Landing from './components/home/landing'
import Movie from './components/home/Movie'
import store from './store'

function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          <Route exact path ="/" component={Landing}/>
          <Route exact path ="/movie/:id" component={Movie}/>
          <Footer/>
        </div>       
      </Router>
      
    </Provider>
      
    
    
    
    
  );
}

export default App;
