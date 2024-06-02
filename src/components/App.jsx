import React from 'react';
import Header from './Header';
import Main from './Main';
import ContactForm from './ContactForm';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <ContactForm />
        <Footer/>
      </div>
    );
  }
}

export default App;
