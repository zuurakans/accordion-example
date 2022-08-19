import React from 'react'
import Accordion from './components/Accordion.js'

const items=[
  {
    id:1,
    title:'I love React',
    content:'I am learning React for about 2 months'
  },
  {
    id:2,
    title:'I love Vue',
    content:'I am learning Vue for about 1 months'
  },
  {
    id:3,
    title:'Is it hard to learn JS?',
    content:'No,it is not.'
  },
  {
    id:4,
    title:'How long does it take to learn JS?',
    content:'For about 3 months'
  }
]

function App() {

  return (
    <div className="ui container">
      <br/>
      <Accordion items={items}/>

    </div>
  );
}

export default App;
