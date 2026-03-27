import React, { useState } from 'react';

function AddTravelForm({ onAddTravel }) {
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Название обязательно';
    }
    
    if (!country.trim()) {
      newErrors.country = 'Страна обязательна';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Описание обязательно';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Описание должно содержать минимум 10 символов';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const newTravel = {
      id: Date.now(), // используем timestamp как уникальный ID
      title: title.trim(),
      country: country.trim(),
      description: description.trim(),
      likes: 0
    };
    
    onAddTravel(newTravel);
    
    // Очищаем форму
    setTitle('');
    setCountry('');
    setDescription('');
    setErrors({});
  };

  return (
    <div className="add-form-container">
      <h2>Добавить новое путешествие</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label htmlFor="title">Название:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Введите название путешествия"
            className={errors.title ? 'error' : ''}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="country">Страна:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Введите страну"
            className={errors.country ? 'error' : ''}
          />
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Введите описание путешествия (минимум 10 символов)"
            rows="4"
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        
        <button type="submit" className="submit-btn">
          Добавить путешествие
        </button>
      </form>
    </div>
  );
}

export default AddTravelForm;