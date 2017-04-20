const section = (state = {}, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      return {
        id: 1,
      };

    case 'SET_SECTION':
      return {
        id: action.id,
      };
    
    default:
      return state;
  }
}

export default section;
