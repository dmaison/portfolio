import locales from '../data/locales.json';

const INITIAL_STATE = {
	locales,
	menu: [
		{ title: 'resume', path: '/resume' },
		{ title: 'portfolio', path: '/portfolio' },
		{ title: 'contact', path: '/contact' }
	]
};

const app = ( state = INITIAL_STATE, action ) => {
	switch( action.type ){
		case 'override locale':
			return { ...state, language: action.payload.toLowerCase() };
		case 'set active':
			let menu = state.menu.map( item => {
				item.active = item.path === action.payload;
				return item;
			});
			return { ...state, menu };
		default:
			return state;
	}
}

export default app;