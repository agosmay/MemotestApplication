import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const ladybug = "https://icongr.am/material/ladybug.svg?size=70&color=ffae00";
const penguin = "https://icongr.am/material/penguin.svg?size=70&color=44ff00";
const kitten = "https://icongr.am/material/cat.svg?size=70&color=9900ff";
const duck = "https://icongr.am/material/duck.svg?size=70&color=9cbde7";
const camaleon = "https://icongr.am/simple/opensuse.svg?size=70&color=ff0000&colored=false"; 
const bat = "https://icongr.am/material/bat.svg?size=70&color=fff700";
const elephant = "https://icongr.am/simple/gradle.svg?size=70&color=00fbff&colored=false"; 
const foca = "https://icongr.am/simple/mariadb.svg?size=70&color=ffffff&colored=false"; 
const octopus = "https://icongr.am/simple/octopusdeploy.svg?size=70&color=ee00ff&colored=false"; 
const fish = "https://icongr.am/simple/glitch.svg?size=70&color=006eff&colored=false"; 

const imagenes = [ladybug, penguin, kitten, duck, camaleon, bat, elephant, foca, octopus, fish].flatMap((image)=> [`a|${image}`, `b|${image}`])
.sort(()=>Math.random() - 0.5);


const Animals = () => {
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
			<h2 style={{textAlign: "center", margin:"20px"}}>Animals Memo</h2>
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


export default Animals;




