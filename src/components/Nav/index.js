import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

import resume0 from '../../assets/small/resume/0.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> </span> Mary Braunger  <a href="https://github.com/Maryjezek"><FontAwesomeIcon icon={["fab","github"]}></FontAwesomeIcon></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/mary-braunger-9bb499a/"><FontAwesomeIcon icon={["fab","linkedin"]}></FontAwesomeIcon></a>&nbsp;&nbsp; <a href="https://stackoverflow.com/users/16450959/mary-b"><FontAwesomeIcon icon="fa-brands fa-stack-overflow" /></a>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li>
            <a href = {resume0} target= "_blank">Resume</a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
