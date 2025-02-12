import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Importation du reducer du panier

// Configuration du store Redux
const store = configureStore({
  reducer: {
    cart: cartReducer, // Le reducer pour la gestion du panier
  },
});

export default store; // Export du store pour l'utiliser dans toute l'application
