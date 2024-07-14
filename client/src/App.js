import { BrowserRouter, Routes, Route } from'react-router-dom';
// Composant qui rend le store accessible à tous les composants de l'application
import { Provider } from 'react-redux';
// Composant s'assurant que toutes les données sont récupérées correctement avant l'utilisation de l'application
import { PersistGate } from 'redux-persist/integration/react';
// Store : Objet contenant l'état global de l'application
// Persistor : S'assure que les données sont sauvegardées et restaurées correctement
import { store, persistor } from './redux/store';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}


export default App;
