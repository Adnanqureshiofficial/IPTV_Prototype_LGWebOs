import {Panel} from '@enact/sandstone/Panels';

import ChannelCard from '../components/ChannelCard/ChannelCard';

import css from './ChannelPanelGrid.module.less';

const ChannelPanelGrid = ({onBack}) => {
	const channels = [
		'HBO',
		'ESPN',
		'CNN',
		'Discovery',
		'National Geo',
		'Movies',
		'Sports',
		'Music',
		'Kids'
	];

	return (
		<Panel className={css.channelPanel} onBack={onBack} >
			<div className={css.overlay} />

			<div className={css.headerSection}>
				<h1 className={css.heading}>
					Live TV
				</h1>
			</div>

			<div className={css.gridContainer}>
				{channels.map((channel, index) => (
					<ChannelCard
						key={index}
						title={channel}
					/>
				))}
			</div>

			<div className={css.backHint}>
				Press ESC to return
			</div>
		</Panel>
	);
};

export default ChannelPanelGrid;