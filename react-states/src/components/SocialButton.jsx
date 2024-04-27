import PropTypes from 'prop-types';

export const SocialButton = ({ icons }) => {
	return (
		<div className="social-icons-container" >
			{icons.map((icon, key) => (
				<div className="social-icon"  key={key}>
					<a href="">
						<i className={icon}></i>
					</a>
				</div>
			))}
		</div>
	);
};

SocialButton.propTypes = {
	icons: PropTypes.array,
};