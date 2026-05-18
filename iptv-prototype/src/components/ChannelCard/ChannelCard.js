import Button from '@enact/sandstone/Button';

import css from './ChannelCard.module.less';

const ChannelCard = ({title}) => {
	return (
		<Button className={css.channelCard}>
			<div className={css.channelName}>
				{title}
			</div>
		</Button>
	);
};

export default ChannelCard;