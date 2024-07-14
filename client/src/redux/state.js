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
        setLogin: (state, action) => {
            state.user = action.payload.user // Connexion de l'utilisateur
            state.token = action.payload.token // Token associé à l'utilisateur
        },
    }
})
export const { setLogin } = userSlice.actions
export default userSlice.reducer;