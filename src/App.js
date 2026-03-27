import React from 'react';
import TravelList from './components/TravelList';
import './App.css';

function App() {
  // Временные тестовые данные
  const travels = [
    {
      id: 1,
      title: 'Отдых на Бали',
      country: 'Индонезия',
      description: 'Пляжи, храмы и джунгли.'
    },
    {
      id: 2,
      title: 'Сафари в Кении',
      country: 'Кения',
      description: 'Наблюдение за дикими животными.'
    },
    {
      id: 3,
      title: 'Горы Швейцарии',
      country: 'Швейцария',
      description: 'Альпийские пейзажи и лыжи.'
    },
    {
      id: 4,
      title: 'Горы Швейцаfdfрии',
      country: 'Швеdfария',
      description: 'Альпdfdf лыжи.'
    },
    {
      id: 5,
      title: 'dfgdfgdf',
      country: 'Швейgfgцария',
      description: 'Алfgи.'
    },
    {
      id: 6,
      title: 'fffff',
      country: 'Швеdfария',
      description: 'Аgf.'
    }
  ];

  return (
    <div className="App">
      <h1>Каталог путешествий</h1>
      <TravelList travels={travels} />
    </div>
  );
}

export default App;