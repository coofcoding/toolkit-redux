import { useSelector, useDispatch } from 'react-redux';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { store } from './store/store';
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector( (state) => state.counter );
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter: { counter }</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
         +
        </button>
        <button onClick={() => dispatch( decrement() )}>
         -
        </button>
        <button onClick={() => dispatch( incrementBy( 10 ) )}>
         +10
        </button>
      </div>
    </>
  )
}

export default App
