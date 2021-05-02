
import './App.css';
import Weather from "./Weather"; 

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="London"/>
      <footer>
        This poject was coded by Marie Ange is 
        <a 
        href="https://github.com/MarieAnge5/react-weather-app" > open-sourced on GitHub</a> hosted on Netlify
      </footer>
    </div>
    </div>
  );
} 

