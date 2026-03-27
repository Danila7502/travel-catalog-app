import React, { useState } from 'react';
import TravelList from './components/TravelList';
import Filter from './components/Filter';
import AddTravelForm from './components/AddTravelForm';
import './App.css';

function App() {
  const [travels, setTravels] = useState([
    {
      id: 1,
      title: 'Отдых на Бали',
      country: 'Индонезия',
      description: 'Пляжи, храмы и джунгли. Райское место для релакса и серфинга.',
      likes: 0
    },
    {
      id: 2,
      title: 'Сафари в Кении',
      country: 'Кения',
      description: 'Наблюдение за дикими животными в национальных парках.',
      likes: 0
    },
    {
      id: 3,
      title: 'Горы Швейцарии',
      country: 'Швейцария',
      description: 'Альпийские пейзажи, горнолыжные курорты и живописные озера.',
      likes: 0
    },
    {
      id: 4,
      title: 'Гранд-Каньон',
      country: 'США',
      description: 'Один из самых глубоких каньонов в мире, потрясающие виды.',
      likes: 0
    },
    {
      id: 5,
      title: 'Мачу-Пикчу',
      country: 'Перу',
      description: 'Древний город инков в Андах, загадочное и историческое место.',
      likes: 0
    },
    {
      id: 6,
      title: 'Северное сияние в Норвегии',
      country: 'Норвегия',
      description: 'Удивительное природное явление в полярную ночь.',
      likes: 0
    }
  ]);

  const [selectedCountry, setSelectedCountry] = useState('');

  // Получаем уникальные страны для фильтра
  const countries = [...new Set(travels.map(travel => travel.country))];

  // Фильтруем путешествия по выбранной стране
  const filteredTravels = selectedCountry
    ? travels.filter(travel => travel.country === selectedCountry)
    : travels;

  const handleLike = (id) => {
    setTravels(prevTravels => 
      prevTravels.map(travel => 
        travel.id === id 
          ? { ...travel, likes: travel.likes + 1 }
          : travel
      )
    );
  };

  const handleFilterChange = (country) => {
    setSelectedCountry(country);
  };

  const handleAddTravel = (newTravel) => {
    setTravels(prevTravels => [...prevTravels, newTravel]);
  };

  return (
    <div className="App">
      <h1>Каталог путешествий</h1>
      <AddTravelForm onAddTravel={handleAddTravel} />
      <Filter 
        countries={countries}
        selectedCountry={selectedCountry}
        onFilterChange={handleFilterChange}
      />
      <div className="travel-count">
        Найдено путешествий: {filteredTravels.length}
      </div>
      <TravelList travels={filteredTravels} onLike={handleLike} />
    </div>
  );
}

export default App;