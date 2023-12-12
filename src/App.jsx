import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  // Stan komponentu
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  // Efekt używany do odczytu komentarzy z localStorage po załadowaniu komponentu
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Funkcja obsługująca dodawanie nowego komentarza
  const addComment = () => {
    if (name.trim() !== '' && comment.trim() !== '') {
      const newComment = { name, comment, id: Date.now() };
      setComments((prevComments) => [...prevComments, newComment]);
      setName('');
      setComment('');
      setError('');
    } else {
      setError('Imię w komentarzu wymagane');
    }
  };

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);
  return (
    <>
      <div className='ski_container'>
        <div className='header'>
          <h1>Wyjazd na Narty 26-30.12.2023</h1>
        </div>
        <div className='space' style={{ position: 'relative' }}>
  <button className='space-btn'
    onClick={() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });
    }}
  >
   press
  </button>
</div>
        <div className='hero'>
           <h1>Kłodzko 2023</h1>
           <ul>skład:
            <li>Włodarz Krzystof Sankowski</li>
            <li>nażeczona włodarza Olivia</li>
            <li>Paulina</li>
            <li>Tomek</li>
            <li>Szymon Opałka</li>
            <li>Kurasz</li>
            <li>Filip przypalone jajo</li>
            <li>dj Broniu</li>
           </ul>
        </div>
        <div className='space' style={{ position: 'relative' }}>
  <button className='space-btn'
    
    onClick={() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });
    }}
  >
    &#8595;
  </button>
</div>
        <div className='plan'>
          <div className='plan-small'>
          <h1>Plan</h1>
          <p><span>26.12</span> wieczór przyjazd do Kłodzka na 2 auta Lexus(Szymon) Ford(Kuba)</p>
          <p><span>27.12</span> rankiem atak na czarną górę</p>
          <p><span>28.12</span> rano atak na Czeską górkę <br/>
          wieczorem chlańsko</p>
          <p><span>29.12</span> filip,Szymon powrót <br/>
          Edwin przyjazd<br/>
          Atak nocna Czarna góra<br/>
          przyjazd mamy Krzysia takżę <br/>
          <span>kulturka</span></p>
          <p><span>30.12</span> Zawijka do Wro</p>
        </div>
        </div>
        <div className='space' style={{ position: 'relative' }}>
  <button className='space-btn'
    style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      cursor: 'pointer',
    }}
    onClick={() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });
    }}
  >
    &#8595;
  </button>
</div>
        <div className='comments'>
        <div>
      <h2>Komentarz</h2>
      <div>
        <label>
          <input className='com-input' placeholder='imię' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          <input className='com-input' placeholder='komentarz' type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
        </label>
      </div>
      <button onClick={addComment}>Add Comment</button>
      <div>
        <h3>Comments:</h3>
        <ul>
          {comments.map((c) => (
            <li className='com-li' key={c.id}>
             <p> <strong>{c.name}:</strong> {c.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default App
