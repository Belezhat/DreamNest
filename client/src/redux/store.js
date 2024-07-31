// Permet d'organiser et gérer les données dans le store Redux
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore, // Outil pour créer le persistor qui va gérer la sauvegarde/restauration
  persistReducer, // Combine les reducers et la persistance des données afin de restaurer l'état de l'application au prochain démarrage.
  FLUSH, // Action pour vider les données persistées
  REHYDRATE,  // Action pour recharger les données persistées
  PAUSE, // Action pour mettre en pause la persistance
  PERSIST, // Déclenché pour initialiser la persistance de l'état de l'application
  PURGE, // Action pour supprimer les données persistées
  REGISTER, //  Action pour enregistrer un réducteur persistant (stockage persistant: localStorage ou sessionStorage).
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import state from "./state";

const persistConfig = {
  key: "root",    // La clé de base pour stocker tout le contenu
  version: 1,    // Version de la configuration
  storage,       // Utilisation du stockage local (localStorage)
};

const persistedReducer = persistReducer(persistConfig, state);

export const store = configureStore({
  reducer: persistedReducer,
  // Permet de gérer les actions faites dans l'application (expl : cliquer sur un bouton). Permet aussi déviter les erreurs lors de la persistance des données.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Vérifie si les actions passées ne sont pas "sérialisables"(ce qui veut dire que la donnée peut être convertie en JSON, puis reconvertie en forme originale sans perdre de d'informations).
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Actions ignorées par la vérification afin de ne pas générer d'erreurs.
      },
    }),
});
// Utilise le store configuré pour sauvegarder et restaurer les données automatiquement.
export let persistor = persistStore(store);

