import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formulario = ({ onChange, handleErrors }) => {
	const onSubmit = (event) => {
		event.preventDefault();

		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z._-]+\.[A-Za-z]{2,}$/;
		const { nombre, correo, password, passwordRepeat } = event.target;
        if (!nombre.value) {
			handleErrors('El nombre es obligatorio');
			return;
		}
        if (!correo.value) {
			handleErrors('El email es obligatorio');
			return;
		}
        if (!password.value) {
			handleErrors('El password es obligatorio');
			return;
		}
        if (!passwordRepeat.value) {
			handleErrors('Repite la contraseña');
			return;
		}

		if (!emailRegex.test(correo.value)) {
			handleErrors('Ingresa un email válido');
			return;
		}

		if (password.value != passwordRepeat.value) {
			handleErrors('Las contraseñas no son iguales');
			return;
		}

		handleErrors('Registro exitoso');
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="nombre"
					type="text"
					placeholder="Nombre"
					onChange={onChange}
				/>
			</Form.Group>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="correo"
					type="email"
					placeholder="tuemail@ejemplo.com"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicPassword"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="password"
					type="password"
					placeholder="Contraseña"
					onChange={onChange}
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicPassword"
			>
				<Form.Label></Form.Label>
				<Form.Control
					name="passwordRepeat"
					type="password"
					placeholder="Confirma tu contraseña"
					onChange={onChange}
				/>
			</Form.Group>

			<Button 
				variant="success "
				type="submit"
        
			>
				Registrarse
			</Button>
		</Form>
	);
};

Formulario.propTypes = {
	onChange: PropTypes.func.isRequired,
	handleErrors: PropTypes.func.isRequired,
};