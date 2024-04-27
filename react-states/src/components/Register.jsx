import PropTypes from 'prop-types';
import { Formulario } from '../components/Form';
import { AlertRegister } from '../components/Alert';
import { SocialButton } from '../components/SocialButton';


export const Register = ({ onChange, handleErrors, formErrors }) => {
	const icons = [
		'fa-brands fa-facebook',
		'fa-brands fa-github',
		'fa-brands fa-linkedin-in',
	];

	return (
		<><div className='formulario'>
			<h1>Crea una cuenta</h1>
			<SocialButton icons={icons} />
            <p>O usa tu email para registrarte</p>
			<Formulario
				onChange={onChange}
				handleErrors={handleErrors}
       
			/>
			<AlertRegister
				formErrors={formErrors}
				color={formErrors === 'Registro exitoso' ? 'success' : 'danger'}
			/>
             </div>
		</>
	);
};

Register.propTypes = {
	onChange: PropTypes.func.isRequired,
	handleErrors: PropTypes.func.isRequired,
	formErrors: PropTypes.string.isRequired,
};