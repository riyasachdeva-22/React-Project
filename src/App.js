import React, { Component } from 'react';
import Login from './Login.js';
import Sign from './sign.js';
import Navi from './components/navbar/navi.js';
import Body from './body.js';
import Aboutus from './aboutus.js';
import Contact from './Contact.js';
import Policy from './Policy.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import FooterPage from './FooterPage.js';
class App extends Component {
 state={
   isLoading:true,
   users:[],
   error:null
 }
  componentDidMount()
  {
    // fetch("https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&latitude=12.91285&longitude=100.87808", {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    //     "x-rapidapi-key": "519f822d33mshbf1f8b7dab2eee1p123f7djsne5541a243080",
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify()
    // })

    
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  }
  render()
  {
  return (
    <div className="App">
      <div style={{height:'100%'}}>
      <Router>
      <Navi/>
      
      <Route exact path='/' render={()=><Body/>}/>
      <Route exact path='/log' render={()=><Login/>}/>
      <Route exact path='/sign' render={()=><Sign/>}/>
      <Route exact path='/about' render={()=><Aboutus/>}/>
      <Route exact path='/contact' render={()=><Contact/>}/>
      <Route exact path='/policy' render={()=><Policy/>}/>
      <FooterPage/>
      </Router>
      </div>
    </div>
  );
}
}

export default App;
