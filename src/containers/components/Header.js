import { connect } from 'react-redux';
import Header from '../../components/Header';

const mapStateToProps = state => ({
  hasError: state.app.hasError,
});

export default connect(mapStateToProps)(Header);