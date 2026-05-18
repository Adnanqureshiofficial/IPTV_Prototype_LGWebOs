import Button from '@enact/sandstone/Button';

import css from './NavigationCard.module.less';

const NavigationCard = ({title, onClick}) => {
	return (
		<Button className={css.navigationCard} onClick={onClick}>
			{title}
		</Button>
	);
};

export default NavigationCard;