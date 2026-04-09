import React from 'react';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecipeDetailView from './components/RecipeDetailView';
import SearchView  from './components/SearchView';
import  Cuisine from './components/Cuisine';
import HomeView from './components/HomeView';
const App = () => {
  return (
    <>
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
        <Navbar/>
        <Cuisine/>
        <Routes>
        <Route path='/' element={<HomeView/>}/>
      </Routes>
      </div>
      
    </Router>
    </>
    
  )
}

export default App;