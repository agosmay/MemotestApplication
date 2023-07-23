import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const devil = "https://icongr.am/material/emoticon-devil.svg?size=70&color=9f8fb3"; 
const kiss = "https://icongr.am/material/emoticon-kiss.svg?size=70&color=44ff00";
const excited = "https://icongr.am/material/emoticon-excited.svg?size=70&color=9900ff";
const wink = "https://icongr.am/material/emoticon-wink.svg?size=70&color=ffdd00";
const neutral = "https://icongr.am/material/emoticon-neutral.svg?size=70&color=9cbde7";
const happy = "https://icongr.am/material/emoticon-happy.svg?size=70&color=4400ff";
const frown = "https://icongr.am/material/emoticon-frown.svg?size=70&color=ffffff";
const confused = "https://icongr.am/material/emoticon-confused.svg?size=70&color=00fbff";
const angry = "https://icongr.am/material/emoticon-angry.svg?size=70&color=ff0000";
const cool = "https://icongr.am/material/emoticon-cool.svg?size=70&color=ee00ff";



const imagenes = [devil, kiss, excited, wink, neutral, happy, frown, confused, angry, cool].flatMap((image)=> [`a|${image}`, `b|${image}`])
.sort(()=>Math.random() - 0.5);


const Emoji = () => {
	const [guessed, setGuessed] = useState([])
	const [selected, setSelected] = useState([])
	const jsConfetti = new JSConfetti();
	
	useEffect(()=> {
		if(selected.length=== 2) {
			if(selected[0].split("|")[1]===selected[1].split("|")[1]) {
				setGuessed((guessed) => guessed.concat(selected));
			}
		
			setTimeout(()=>setSelected([]) , 1000);
		}
		
	},[selected])
	
	
	useEffect(()=> {
		
		if(guessed.length===imagenes.length) {
			jsConfetti.addConfetti();
		}
	},[guessed])
	
	return (
		<>
			<h2 style={{textAlign: "center", margin:"20px"}}>Emoji Memo</h2>
			<ul className="memoList"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(5, 1fr)" , 
						gridTemplateRows: "repeat(4, 1fr)",
						gap: 10

	  
						
						
					}}
				>
					
						{
							imagenes.map((image)=>  {
								const [, url] = image.split("|");
								return (
									<li 
										onClick={()=> selected.length < 2 && setSelected((selected)=> selected.concat(image))}
										key={image}
										style={{padding:12, border: "1px solid #999", textAlign: "center", borderRadius:12, cursor: "pointer" }}
										
									>
										
										{selected.includes(image) || guessed.includes(image) ? (
										
											<img src={url} alt="icon" />
									
										) : ( 
										
										<img src="https://icongr.am/clarity/remove.svg?size=70&color=currentColor&colored=false" 
											alt="icon" 
										/>
						
						)}
							
							</li>
						)
					})}
					
				</ul>
				<div className="link-container">
					
						
						<img src="https://icongr.am/clarity/refresh.svg?size=25&color=00e1ff" style={{cursor:"pointer"}} onClick={()=> location.reload()} />
						<p onClick={()=> location.reload()} style={{cursor: "pointer"}}>Play Again</p>
				
					
					<br />
					
					<Link to="/" className="link">Back to Home</Link>
				</div>
			</>
		
	
	);	
}


export default Emoji;