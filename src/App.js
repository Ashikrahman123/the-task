import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import HeaderContent from './components/HeaderContent';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderContent />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;