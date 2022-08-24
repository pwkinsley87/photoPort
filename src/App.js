import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact/index';

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description: "photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: 'portraits', description: 'Portraits of the people in my life.' },
    { name: 'food', description: 'Delcious delicacies' },
    {name: 'landscape', description: 'The beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
         <ContactForm></ContactForm>
         <Gallery currentCategory={currentCategory}></Gallery>
         <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
