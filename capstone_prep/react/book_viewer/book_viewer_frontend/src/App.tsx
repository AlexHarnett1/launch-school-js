import { getTableOfContents, getChapter } from "./services/book_viewer";
import { useState, useEffect } from 'react'
import { TOC } from "./types";
import "../../assets/book_viewer.css"

function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-');
}

function unslugify(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


interface TOCProps {
  toc: TOC,
  handleChapterClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

interface TOCChapterProps {
  chapter: string
  handleChapterClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const Sidebar = (props: TOCProps ) => {
  const chapters = props.toc.chapters.map((chapter, index) => (
    <TOCChapter chapter={chapter} key={index}
      handleChapterClick={props.handleChapterClick} />)
  )

  return (
    <div id="menu">
      <div className="pure-menu">
        <a className="pure-menu-heading" href="/">Table of Contents</a>
        <ul className="pure-menu-list">
          {chapters}
        </ul>
      </div>
    </div>
  )
}

const TOCChapter = (props: TOCChapterProps) => {
  const url = `/${slugify(props.chapter)}`
  return (
    <li className="pure-menu-item">
      <a href={url} className="pure-menu-link"
        onClick={props.handleChapterClick}>{props.chapter} </a>
    </li>
  )
}

const TOCContent = (props: TOCProps) => {
  const chapters = props.toc.chapters.map((chapter, index) => (
    <TOCChapter chapter={chapter} key={index}
      handleChapterClick={props.handleChapterClick} />)
  )

  return (
    <div className="pure-menu">
      <ul className="pure-menu-list">
        {chapters}
      </ul>
    </div>
  )
}

const App = () => {
  const [tableOfContents, setTableOfContents] = useState<TOC>({
    book: '',
    chapters: []
  })

  const [content, setContent] = useState<string>('')
  const [chapter, setChapter] = useState<string>('')

  useEffect(() => {
    getTableOfContents().then(data => {
      setTableOfContents(data)
    })
  }, [])

  const handleChapterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const href = event.currentTarget.href
    const chapterTitle = href.split('/').pop()
    if (chapterTitle) {
      getChapter(chapterTitle).then(data => {
        setChapter(chapterTitle)
        setContent(data)
      })
    } else {
      console.error('Link you clicked on doesnt exist')
    }
  }

  console.log(tableOfContents)

  return (
    <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
      </a>

      <Sidebar toc={tableOfContents} handleChapterClick={handleChapterClick} />
      <div id="main">
        <div className="header">
          <h1>The Adventures of Sherlock Holmes</h1>
          <h2>by Sir Arthur Doyle</h2>
        </div>

        <div className="content">
          <h2 className="content-subhead">{chapter ? unslugify(chapter) : 'Table of Contents'}</h2>

          {content ?
            content :
            <TOCContent toc={tableOfContents} handleChapterClick={handleChapterClick} />}
          
        </div>
        
      </div>
    </div>
  );
};

export default App;