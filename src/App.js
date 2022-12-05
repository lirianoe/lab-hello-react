import './App.css';
import NavBar from './components/navbar'
import Header from './components/header'
import Content from './components/content'


function App() {
  return (
    <div className="App">
      <div className='header'>
     <NavBar/>
     <Header/>
     </div>
     <Content/>
     </div>
    
  );
}
export default App;