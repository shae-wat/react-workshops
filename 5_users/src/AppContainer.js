import { connect } from 'react-redux';
import App from './App.js';
import {setSectionAction} from './actions/section.js';

function mapStateToProps(state) {
  return {
    section: state.section,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChangeSection: (id) => {
      dispatch(setSectionAction(id));
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
