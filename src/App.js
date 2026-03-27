import React, { useState } from 'react';
import TravelList from './components/TravelList';
import './App.css';

function App() {
  // Используем useState для управления данными о путешествиях
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
      description: 'Древний город инков в Андах, загадочное和历史ческое место.',
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

  // Функция-обработчик для увеличения количества лайков
  const handleLike = (id) => {
    setTravels(prevTravels => 
      prevTravels.map(travel => 
        travel.id === id 
          ? { ...travel, likes: travel.likes + 1 }
          : travel
      )
    );
  };

  return (
    <div className="App">
      <h1>Каталог путешествий</h1>
      <TravelList travels={travels} onLike={handleLike} />
    </div>
  );
}

export default App;