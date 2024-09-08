import React, { useEffect } from 'react';
import './App.css';
import { getMenuData } from './services/menu';
import Menu from './components/Menu';


const App = () => {
  return (
    <div>
      <Menu />
    </div>
  )
}

export default App