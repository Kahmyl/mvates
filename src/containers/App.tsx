import Polls from '../components/Polls';
import { Provider } from 'react-redux'
import { store } from '../redux';

function App() {
  
  return (
    <Provider store={store}>
      <div>
        Hello World
        <Polls/>
      </div>
    </Provider>
  );
}

export default App;
