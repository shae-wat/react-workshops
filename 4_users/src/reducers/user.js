const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        id: action.id,
        success: action.success,
        email: action.email,
        password: action.password
      }

    default:
      return state
  }
}

export default user;
