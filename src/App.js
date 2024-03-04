import React, { useState } from 'react';
import data from './data';
import OneQuestion from './Question';
function App() {
  const [questions, setQuestion]= useState(data)
  return <main>
    <div className="container">
      <h2>accordion questions</h2>
    <div className="info">
    {questions.map((question)=>{
      return <OneQuestion key={question.id}{...question}/>
    })}
    </div>
    </div>
  </main>
}

export default App;
