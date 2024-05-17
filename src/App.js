import logo from './logo.svg';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import PageOne from './PageOne/PageOne';
import PageTwo from './PageTwo/PageTwo';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<PageOne/>} /> 
          <Route path='/home' element={<PageTwo/>} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
