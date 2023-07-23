import React from 'react';
import { Link } from 'react-router-dom';

const android = "https://icongr.am/devicon/android-original.svg?size=26&color=currentColor";
const paw = "https://icongr.am/simple/baidu.svg?size=26&color=ffdd00&colored=false";
const ray = "https://icongr.am/material/flash.svg?size=26&color=bb00ff";
const karate = "https://icongr.am/material/karate.svg?size=26&color=00aaff";
const devil = "https://icongr.am/material/emoticon-devil.svg?size=26&color=ff0004";
const pencil = "https://icongr.am/fontawesome/pencil.svg?size=26&color=ffc800"


const Home = () => {
	
	
	return (
		<>
			<div className="memoList">
				<h1>Welcome to Memotest Game</h1>
				<h2>Tap on Topic to Play</h2>
				<br />
					<ul className="homeList">
						<li><Link to="/tech" className="link"><img src={android} />{" "}Tech</Link></li>
						<br />
						<li><Link to="/animals" className="link"><img src={paw} />{" "}Animals</Link></li>
						<br />
						<li><Link to="/weather" className="link"><img src={ray} />{" "}Weather</Link></li>
						<br />
						<li><Link to="/sports" className="link"><img src={karate} />{" "}Sports</Link></li>
						<br />
						<li><Link to="/emoji" className="link"><img src={devil} />{" "}Emoji</Link></li>
					</ul>
					<br />
					<br/>
					<h2>Also Play...</h2>
					<ul className="homeList">
						<li><Link to="/wpm" className="link"><img src={pencil} />{" "}Go to Words Per Minute!</Link></li>
					</ul>
			</div>
			
		</>
	
	);
	
	
}


export default Home;