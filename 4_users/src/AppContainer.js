import { connect } from 'react-redux';
import App from './App.js';

function mapStateToProps(state) {
  return {
    section: state.section,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
