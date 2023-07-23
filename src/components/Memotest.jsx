import React , { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

const angular = "https://icongr.am/devicon/angularjs-original.svg?size=70&color=currentColor";
const chrome = "https://icongr.am/devicon/chrome-original.svg?size=70&color=currentColor";
const css = "https://icongr.am/devicon/css3-original.svg?size=70&color=currentColor";
const gitLab = "https://icongr.am/devicon/gitlab-original.svg?size=70&color=currentColor";
const go = "https://icongr.am/devicon/go-original.svg?size=70&color=currentColor";
const google = "https://icongr.am/devicon/google-original.svg?size=70&color=currentColor";
const js = "https://icongr.am/devicon/javascript-original.svg?size=70&color=currentColor";
const firefox = "https://icongr.am/devicon/firefox-original.svg?size=70&color=currentColor";
const cSharp = "https://icongr.am/devicon/csharp-original.svg?size=70&color=currentColor";
const android = "https://icongr.am/devicon/android-original.svg?size=70&color=currentColor";

const imagenes = [angular, chrome, css, gitLab, go, google, js, firefox, cSharp, android].flatMap((image)=> [`a|${image}`, `b|${image}`])
.sort(()=>Math.random() - 0.5);

const Memotest = () => {
	
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
			<h2 style={{textAlign: "center", margin:"20px"}}>Tech Memo</h2>
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

export default Memotest;
