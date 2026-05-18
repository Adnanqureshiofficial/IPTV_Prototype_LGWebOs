import NavigationCard from '../NavigationCard/NavigationCard';

import css from './BottomDock.module.less';

const BottomDock = ({items}) => {
	return (
		<div className={css.dockWrapper}>
			<div className={css.cardContainer}>
				{items.map((item) => (
					<NavigationCard
						key={item.id}
						title={item.title}
						onClick={item.onClick}
					/>
				))}
			</div>
		</div>
	);
};

export default BottomDock;