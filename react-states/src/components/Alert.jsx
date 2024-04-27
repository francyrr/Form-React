import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export const AlertRegister = ({ formErrors, color }) => {
	return <>{formErrors && <Alert variant={color}>{formErrors}</Alert>}</>;
};

AlertRegister.propTypes = {
	formErrors: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};