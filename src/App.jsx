import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Project from './components/Project';
import Nav from './components/Navigation';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Project') {
          return <Project />;
        }
        if (currentPage === 'Contact') {
          return <ContactForm />;
        }
        return <Resume />;
      };
      const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='d-flex flex-column min-vh-100'>
    <Header ></Header>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
    <main>
      
    {renderPage()} 
      
    </main>
    <Footer></Footer>
    </div>
  );
}

export default App;
