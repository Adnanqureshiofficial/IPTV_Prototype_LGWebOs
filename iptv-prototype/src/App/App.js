import {useState} from 'react';

import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';

import HomePanel from '../views/HomePanel';
import ChannelPanelGrid from '../views/ChannelPanelGrid';

const App = () => {
	const [index, setIndex] = useState(0);

	const handleNavigateToChannels = () => {
	console.log("going to Channel Grid");	
		setIndex(1);
	};

	const handleBackToHome = () => {
		console.log("back or escape pressed");
		setIndex(0);
	};

	return (
		<Panels index={index}>
			<HomePanel
				onNavigateToChannels={handleNavigateToChannels}
			/>

			<ChannelPanelGrid
				onBack={handleBackToHome}
			/>
		</Panels>
	);
};

export default ThemeDecorator(App);