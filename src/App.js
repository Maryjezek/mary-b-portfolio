import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "projects",
      description:
        "Photos of my web development projects",
    },
    { name: "resume", description: "This is my resume" },

  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

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
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
          

    
        <h2> Made by Mary B.  <a href="https://github.com/Maryjezek">GitHub</a><a href="https://www.linkedin.com/in/mary-braunger-9bb499a/">linkedIn</a> <a href="https://stackoverflow.com/users/16450959/mary-b">StackOverflow</a>       </h2>
         
    </div>
    
  );
}

export default App;
