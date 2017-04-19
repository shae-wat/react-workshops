const section = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SECTION':
      return {
        section: action.section,
      };

    default:
      return state;
  }
}

export default section;
