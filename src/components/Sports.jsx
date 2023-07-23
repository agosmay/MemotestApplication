import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const box = "https://icongr.am/material/boxing-glove.svg?size=70&color=9f8fb3";  //guante box
const bowling = "https://icongr.am/material/bowling.svg?size=70&color=44ff00"; //bowling
const racquetball = "https://icongr.am/material/racquetball.svg?size=70&color=9900ff";  //racquetbal
const bike= "https://icongr.am/material/bike.svg?size=70&color=00fbff";  //bike
const hiking = "https://icongr.am/material/biathlon.svg?size=70&color=9cbde7"; //hiking
const tiroConArco = "https://icongr.am/material/bullseye-arrow.svg?size=70&color=4400ff";  //tiro con arco
const karate = "https://icongr.am/material/karate.svg?size=70&color=ffffff";  //karate
const kabaddi = "https://icongr.am/material/kabaddi.svg?size=70&color=ffdd00";//kabaddi
const helmet = "https://icongr.am/material/racing-helmet.svg?size=70&color=ff0000";  //motocross
const rollers = "https://icongr.am/material/roller-skate.svg?size=70&color=ee00ff";  //rollers

const imagenes = [box, bowling,racquetball, bike, hiking, tiroConArco, karate, kabaddi, helmet, rollers].flatMap((image)=> [`a|${image}`, `b|${image}`])
.sort(()=>Math.random() - 0.5);


const Sports = () => {
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
			<h2 style={{textAlign: "center", margin:"20px"}}>Sports Memo</h2>
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


export default Sports;
