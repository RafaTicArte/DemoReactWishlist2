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
  let initialWishes: WishType[] = JSON.parse(localStorage.getItem('WISHES') as string) as WishType[];
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

  return (
    <div className="app">
      <h1>My wishlist</h1>
      <div className="header-img">
        <img src={logo} alt="logo" width="50" />
      </div>
      <WishInput
        onNewWish={(newWish: WishType) => {
          setAppWishes([...appWishes, newWish]);
        }}
      />
      <WishList
        wishes={appWishes}
        onWishChange={(updatedWish: WishType) => {
          const updatedAppWishes = [...appWishes];
          const modifyWish: WishType | undefined = updatedAppWishes.find(
            (wish) => wish.id === updatedWish.id,
          );
          modifyWish!.done = updatedWish.done;
          setAppWishes(updatedAppWishes);
        }}
      />
      <WishSave
        onWishesSave={() => {
          console.log('Saving wishes...');
          localStorage.setItem('WISHES', JSON.stringify(appWishes));
        }}
      />
    </div>
  );
}

export default App;
