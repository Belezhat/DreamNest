// Fonction qui permet de simplifier, d'organiser et de gérer les actions (tâches)
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      // Réducteur pour gérer la connexion de l'utilisateur
        setLogin: (state, action) => {
            state.user = action.payload.user // Connexion de l'utilisateur
            state.token = action.payload.token // Token associé à l'utilisateur
        },
        // Gére la déconnexion de l'utilisateur
        setLogout: (state) => {
            state.user = null
            state.token = null
          },
         // Réducteur pour mettre à jour les annonces
          setListings: (state, action) => {
            state.listings = action.payload.listings // Met à jour les annonces avec les données fournies
          },
          setTripList: (state, action) => {
            state.user.tripList = action.payload
          },
          setWishList: (state, action) => {
            state.user.wishList = action.payload
          },
          setPropertyList: (state, action) => {
            state.user.propertyList = action.payload
          },
          setReservationList: (state, action) => {
            state.user.reservationList = action.payload
          }
        }
      })
      
      export const { setLogin, setLogout, setListings, setTripList, setWishList, setPropertyList, setReservationList } = userSlice.actions
      // Exportation du réducteur généré automatiquement pour l'intégrer dans le store Redux
      export default userSlice.reducer