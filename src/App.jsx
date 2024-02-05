import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment, incrementBy } from './store/slices/counter';

function App() {

  const { counter } = useSelector( (state) => state.counter );
  const dispatch = useDispatch();

  return (
    <>
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
