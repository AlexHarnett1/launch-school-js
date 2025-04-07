import { getTableOfContents } from "./services/book_viewer";
import { useState, useEffect } from 'react'
import { TOC } from "./types";
import "../../assets/book_viewer.css"

const App = () => {
  const [tableOfContents, setTableOfContents] = useState<TOC[]>([])


  useEffect(() => {
    getTableOfContents().then(data => {
      setTableOfContents(data)
    })
  }, [])

  console.log(tableOfContents)

  return (
    <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
      </a>

      <div id="menu">
        <div className="pure-menu">
          <a className="pure-menu-heading" href="/">Table of Contents</a>

          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a href="#" className="pure-menu-link">Chapter 1</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="main">
        <div className="header">
          <h1>The Adventures of Sherlock Holmes</h1>
          <h2>by Sir Arthur Doyle</h2>
        </div>

        <div className="content">
          <h2 className="content-subhead">Table of Contents</h2>

          <div className="pure-menu">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a href="#" className="pure-menu-link">Chapter 1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;