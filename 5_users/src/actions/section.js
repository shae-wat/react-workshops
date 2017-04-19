export const setSectionAction = (id) => {
  console.log('section action',id)
  return {
    type: 'SET_SECTION',
    id,
  }
}

//export const setSection = (section) => dispatch(setSectionAction(section));
