export const setCurrentUser = user => ({ //esse é o contexto que será passado para o userReducer (type do switch)
    type: 'SET_CURRENT_USER', //O que será usado no reducer
    payload: user //Payload é o que será mudado no reducer
})