import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';


function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
    <Header></Header>  
    <main>
      <About></About>

      <ContactForm></ContactForm>
    </main>
    <Footer></Footer>
    </div>
  );
}

export default App;
