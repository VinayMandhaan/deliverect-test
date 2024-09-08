import './App.css';
import Menu from './components/Menu';
import MenuProvider from './store';


const App = () => {
  return (
    <MenuProvider>
      <Menu />
    </MenuProvider>
  )
}

export default App