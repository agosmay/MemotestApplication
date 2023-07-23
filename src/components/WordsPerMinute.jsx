import React , { useState, useEffect , useRef } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/WordsPerMinute.css';


const words = [
'abdomen', 
'abrazo', 
'luz', 
'sol', 
'palabra', 
'diferencia', 
'lluvia', 
'paraguas', 
'avispa', 
'abeja', 
'anteojos',
'cebra',
'erizo',
'pulpo',
'ladrillo',
'golosina',
'zapatillas',
'alfajor',
'ventilador',
'banco',
'silla',
'mesa'
];

const WordsPerMinute = () => {
const [word, setWord]= useState(()=> words[Math.random() * words.length | 0])
	
	const [characterCount, setCharacterCount] =  useState(0);
	const [buffer, setBuffer]= useState("");
	const [time, setTime]=useState(0);
	const [shouldSubmit, setShouldSubmit] = useState(false);
    const formRef = useRef(null);
	
	
		
	const handleClick = () => {
		if(buffer!==word && time===0) {
			setBuffer("");
			setCharacterCount(0);
			
			
		}
		
		setTime(60)
		
	}
	
	const handleChange = (e) => {
		setBuffer(e.target.value.toLowerCase())
		
		if (event.target.value === 'submit') {
      setShouldSubmit(true);
    }
	
	
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		  const trimmedInputValue = buffer.trim();
		  
		  
		  
		  
		if(trimmedInputValue===word){
			setShouldSubmit(true);
			setWord(words[(Math.random()* words.length) | 0]);
			setCharacterCount(characterCount => characterCount + word.length);
			
			setBuffer("");
		}
		
		setBuffer("");
		
		
	}
	
	

	
	
	useEffect(()=> {
		if(time!==0) {
			const timeout = setTimeout(()=> setTime(time - 1),1000);
			return () => clearTimeout(timeout);
		}
		
	},[time]);
	
	 useEffect(() => {
    if (shouldSubmit) {
      formRef.current.dispatchEvent(new Event('submit'));
    }
  }, [shouldSubmit]);
	
	

	
	
	
	return (
		<>
			<div className="memoList" style={{display:"flex", flexDirection: "column", gap: 12}}>
				
				<div style={{display:"flex", flexDirection: "row", justifyContent:"space-between"}}>
					<h1  style={{fontSize:"18px"}}>Characters typed: {characterCount}</h1>
					
					<h3 style={{fontSize:"18px"}}>Remaining time: {time}</h3>
				</div>
					
						{time!==0 ? (
							
							 <form ref={formRef} onSubmit={handleSubmit} style={{textAlign: "center"}}>
								{Boolean(time) && <h2>Type : {word}</h2>}
								<br />
								<input style={{backgroundColor:"white", color:"black"}}type="text" autoFocus value={buffer} onChange={handleChange} />
							
							</form>
						): (
							
								<button onClick={()=> handleClick()}> Play</button>
							
						)
						}
			
			</div>
			<div className="link-container">
				<Link to="/" className="link">Back to Home</Link>
			</div>
		</>
	
	);
}

export default WordsPerMinute;



