import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const cloud = "https://icongr.am/material/apple-icloud.svg?size=70&color=9f8fb3"; 
const sun = "https://icongr.am/material/brightness-7.svg?size=70&color=44ff00";   //sun
const moon = "https://icongr.am/material/brightness-3.svg?size=70&color=9900ff"; //moon
const ray = "https://icongr.am/material/flash.svg?size=70&color=00fbff";  //ray
const sunBis = "https://icongr.am/material/flare.svg?size=70&color=9cbde7"; //anothersun
const rainbow = "https://icongr.am/material/looks.svg?size=70&color=4400ff";  //rainbow
const meteoro = "https://icongr.am/material/meteor.svg?size=70&color=ffffff"; //meteoro
const crescentMoon = "https://icongr.am/material/moon-waning-crescent.svg?size=70&color=ffdd00"; //luna creciente
const cloudBis = "https://icongr.am/material/salesforce.svg?size=70&color=ff0000"; //nube mas cargada
const star = "https://icongr.am/simple/apachespark.svg?size=70&color=ee00ff&colored=false"; //star



const imagenes = [cloud, sun, moon, ray, sunBis, rainbow, meteoro, crescentMoon, cloudBis, star].flatMap((image)=> [`a|${image}`, `b|${image}`])
.sort(()=>Math.random() - 0.5);


const Weather = () => {
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
			<h2 style={{textAlign: "center", margin:"20px"}}>Weather Memo</h2>
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


export default Weather;

