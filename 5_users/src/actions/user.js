export const addUser = (email, password) => {
  return {
    type: 'ADD_USER',
    email,
    password
  }
}
