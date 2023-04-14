import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';
import { useState } from 'react';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperatuere: string;
  conditionText: string;
  icon: string;
}


function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperatuere: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetch(`https://api.weatherapi.com/v1/current.json?key=59c2875b30e749b9ab590336231304&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperatuere: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
  }
  return (
    <div className="wrapper">
      <div className='container'>
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
