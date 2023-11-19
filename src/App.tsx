import { useState, useEffect } from 'react';
import WishInput from './components/WishInput';
import WishList from './components/WishList';
import WishSave from './components/WishSave';
import { WishType } from './hooks/Types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './App.css';
import logo from './assets/logo_ticarte.png';

/**
 * Render main application.
 * @category Components
 */
function App() {
  console.log('Loading wishes...');
  let initialWishes: WishType[] = JSON.parse(
    localStorage.getItem('WISHES') as string,
  ) as WishType[];
  if (!initialWishes) {
    initialWishes = [
      { id: crypto.randomUUID(), done: false, text: 'Travel to the moon' },
      { id: crypto.randomUUID(), done: true, text: 'Make an intro course to React' },
      { id: crypto.randomUUID(), done: true, text: 'Pay the gym' },
      { id: crypto.randomUUID(), done: false, text: 'Go to the gym' },
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
    <div className="app container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mb-3">My wishlist</h1>
          <div className="text-center mb-3">
            <a href="https://www.ticarte.com">
              <img src={logo} alt="TicArte" width="120" />
            </a>
          </div>
          <WishInput onNewWish={addWish} />
          <WishList wishes={appWishes} onUpdateWish={updateWish} />
          <WishSave onSaveWishes={saveWishes} />
        </div>
      </div>
    </div>
  );
}

export default App;
