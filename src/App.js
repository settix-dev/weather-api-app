import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import NationalWeatherAlerts from './routes/NationalWeatherAlerts';
import HourlyForecast from './routes/HourlyForecast';
import MinuteForecast from './routes/MinuteForecast';
import DailyForecast from './routes/DailyForecast';

function App() {
  return (
    <div className="App">
    <NavBar />
      <h1>Weather Api App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nationalWeatherAlerts' element={<NationalWeatherAlerts />}/>
          <Route path='/minuteForecast' element={<MinuteForecast />}/>
          <Route path='/hourlyForecast' element={<HourlyForecast />}/>
          <Route path='/dailyForecast' element={<DailyForecast />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
