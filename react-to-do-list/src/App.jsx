import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TodosContainer from './components/TodosContainer';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('');
  return (
    <>
      <Header />
      <Navigation setView={setView} />
      <TodosContainer view={view} />
      <Footer />
    </>
  );
}

export default App;
