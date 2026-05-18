import css from './HeaderOverlay.module.less';

const HeaderOverlay = () => {
	return (
		<div className={css.headerWrapper}>
			<h1 className={css.greeting}>
				Welcome Mr. Guest
			</h1>
		</div>
	);
};

export default HeaderOverlay;