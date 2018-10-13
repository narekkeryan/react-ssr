import { connect } from 'react-redux';
import { errNotFound } from '../../actions/appActions';
import NotFound from '../../scenes/NotFound';

const mapDispatchToProps = dispatch => ({
  errNotFound: () => dispatch(errNotFound()),
});

export default connect(null, mapDispatchToProps)(NotFound);