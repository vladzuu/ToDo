import React from 'react';
import './App.css';
import ToDo from './component/ToDo';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
            <ToDo />
          </header>
        </div>
      </PersistGate>
    </Provider>

  );
}

export default App;
