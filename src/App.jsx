import Memotest from './components/Memotest';
import WordsPerMinute from './components/WordsPerMinute';
import Home from './components/Home';
import Animals from './components/Animals';
import Weather from './components/Weather';
import Sports from './components/Sports';
import Emoji from './components/Emoji';
import { HashRouter , Routes , Route } from 'react-router-dom';



const App = () => {
  

  return (
	<HashRouter>
		<Routes>
			<Route 
				path="/"
				element={<Home />}
			/>
		
			<Route 
				path="/tech" 
				element={<Memotest />}
			/>
			<Route 
				path="/animals" 
				element={<Animals />}
			/>
			<Route 
				path="/weather"
				element={<Weather />}
			/>
			<Route 
				path="/sports"
				element={<Sports />}
			
			/>
			<Route 
				path="/emoji"
				element={<Emoji />}
			
			/>
			<Route 
				path="/wpm" 
				element={<WordsPerMinute />}
			/>
			
			
		</Routes>
	</HashRouter>
  )
}

export default App
