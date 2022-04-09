import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactForm from "./components/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


function App() {
  const [categories] = useState([
    {
      name: "projects",
      description:
        "Photos of my web development projects",
    },
    

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
          

    
        <h2> Made by Mary B.  <a href="https://github.com/Maryjezek"><FontAwesomeIcon icon={["fab","github"]}></FontAwesomeIcon></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/mary-braunger-9bb499a/"><FontAwesomeIcon icon={["fab","linkedin"]}></FontAwesomeIcon></a>&nbsp;&nbsp; <a href="https://stackoverflow.com/users/16450959/mary-b"><FontAwesomeIcon icon="fa-brands fa-stack-overflow" /></a>    </h2>
         
    </div>
    
  );
}

export default App;
