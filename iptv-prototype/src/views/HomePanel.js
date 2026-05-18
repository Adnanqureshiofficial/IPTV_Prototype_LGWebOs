import {Panel} from '@enact/sandstone/Panels';

import HeaderOverlay from '../components/HeaderOverlay/HeaderOverlay';
import BottomDock from '../components/BottomDock/BottomDock';

import css from './HomePanel.module.less';

const HomePanel = ({onNavigateToChannels}) => {
	const navigationItems = [
		{
			id: 1,
			title: 'Live TV',
            onClick: onNavigateToChannels
		},
		{
			id: 2,
			title: 'OTT Apps'
		},
		{
			id: 3,
			title: 'Hotel Info'
		},
		{
			id: 4,
			title: 'Services'
		}
	];

	return (
		<Panel className={css.homePanel}>
			<div className={css.backgroundOverlay} />

			<HeaderOverlay />

			<BottomDock items={navigationItems} />
		</Panel>
	);
};

export default HomePanel;