import { useState } from 'react';
import './App.css';
import ReactMarkdown from "react-markdown";
import { LiaFreeCodeCamp } from "react-icons/lia";

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;
 
function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div className='body'>
        <h1 style={{textAlign:"center"}}>Markdown Previewer</h1>
        <div className="boxes-container">
          <h2 className="heading">
          <LiaFreeCodeCamp/> <span>Editor</span>
          </h2>
          <textarea 
            name="editor" 
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
            >
          </textarea>
          <h2 className="heading">
          <LiaFreeCodeCamp /> <span>Preview</span>
          </h2>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      <footer className="footer">
        <h5>Created by: Albert Celestino | May 19, 2024</h5>
        <h5 style={{textAlign: "center"}}>
          Project on 
          <span>
            <a href="https://www.freecodecamp.org/" className='project-link' target='_blank'>
              FreeCodeCamp
            </a>
          </span>
        </h5>
      </footer>
      </div>
    </>
  )
}

export default App
