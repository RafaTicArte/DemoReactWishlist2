import { useState, useEffect } from 'react';
import { v4 as Uuid } from 'uuid';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import WishSave from './components/WishSave';
import { WishType } from './hooks/Types';
import './App.css';
import logo from './assets/logo.svg';

/**
 * Render main application.
 */
function App() {
  console.log('Loading wishes...');
  let initialWishes: WishType[] = JSON.parse(
    localStorage.getItem('WISHES') as string,
  ) as WishType[];
  if (!initialWishes) {
    initialWishes = [
      { id: Uuid(), done: false, text: 'Travel to the moon' },
      { id: Uuid(), done: true, text: 'Make an intro course to React' },
      { id: Uuid(), done: true, text: 'Pay the gym' },
      { id: Uuid(), done: false, text: 'Go to the gym' },
    ];
  }
  const [appWishes, setAppWishes] = useState(initialWishes);

  useEffect(() => {
    console.log(`Render App: x${appWishes.length} wishes`);
  });

  function addWish(newWish: WishType) {
    setAppWishes([...appWishes, newWish]);
  }

  function updateWish(alterWish: WishType) {
    const updatedAppWishes = [...appWishes];
    updatedAppWishes.forEach((wish, index) => {
      if (wish.id === alterWish.id) {
        updatedAppWishes[index].done = alterWish.done;
        updatedAppWishes[index].text = alterWish.text;
      }
    });
    setAppWishes(updatedAppWishes);
  }

  function saveWishes() {
    console.log('Saving wishes...');
    localStorage.setItem('WISHES', JSON.stringify(appWishes));
  }

  return (
    <div className="app">
      <h1>My wishlist</h1>
      <div className="header-img">
        <img src={logo} alt="logo" width="50" />
      </div>
      <WishInput onNewWish={addWish} />
      <WishList wishes={appWishes} onChangeWish={updateWish} />
      <WishSave onSaveWishes={saveWishes} />
    </div>
  );
}

export default App;
