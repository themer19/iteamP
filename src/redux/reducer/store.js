import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer';


const store = configureStore({
  reducer: rootReducer,
  // Autres options de configuration ici si nécessaire
});

export default store;