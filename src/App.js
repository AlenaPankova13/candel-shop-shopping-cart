import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [candel, setCandel] = useState(data);

  const removeItem = (id) => {
    let newCandel = candel.filter (item => item.id !== id);
    setCandel(newCandel);
  }

  return (
    <div>
      <div className='container'>
        <h1>В вашей корзине {candel.length} товаров:</h1>
     </div>

     <div>
      {candel.map(item => {
        const {id, image, description, price} = item;

        return (
          <div key={id}>
            <div className='container'>
              <img src={image} width='300px' alt='candel'/>
            </div>

            <div className='container'>
              <p>{description}</p>
            </div>

            <div className='container'>
              <h3>{price}</h3>
            </div>

            <div className='container'>
              <button onClick={() => removeItem(id)}>Удалить</button>
            </div>
          </div>
        )
      })}
     </div>

      <div className='container'>
          <button onClick={() => setCandel([])}>Очистить корзину</button>
      </div>
    </div>
  );
}

export default App;
