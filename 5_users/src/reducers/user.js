const user = (state = {}, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      return {
        id: 1,
        email: 'shaelynjoy+hardcode@gmail.com',
        password: 'storedpass',
      };

    case 'ADD_USER':
      return {
        id: action.id,
        email: action.email,
        password: action.password,
      };

    default:
      return state;
  }
}

export default user;
