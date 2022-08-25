import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact/index';

const [contactSelected, setContactSelected] = useState(false);

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description: "photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: 'portraits', description: 'Portraits of the people in my life.' },
    { name: 'food', description: 'Delcious delicacies' },
    { name: 'landscape', description: 'The beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
         {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}>
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }} ></span>
            </Gallery>
            <About>
              <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}></a>
            </About>
          </>
         ) : (
          <ContactForm>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </ContactForm>
         )}
        </div>
      </main>
    </div>
  );
}

export default App;
