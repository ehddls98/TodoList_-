import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { reset } from './styles/global';
import { Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={reset}/>
      <MainPage/>
    </>
  );
}

export default App;
