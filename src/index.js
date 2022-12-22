import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// todo: react-tostify як повідомлення...
// DONE обробка 0 об'єктів у відповідь
// DONE- : обробка 404 від серверу
// todo: може перевірку завантажень усіх імаджів в окремий файл?
// todo:  додати пропси

// todo: рефакторінг...

//todo: пусту сторінку із повідомленням при натисненні пошуку із пустим запитом
