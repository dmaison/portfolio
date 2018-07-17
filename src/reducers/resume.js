import data from '../data/resume';

const INITIAL_STATE = {
	...data
};

const resume = ( state = INITIAL_STATE, action ) => {
	switch( action.type ){
		default:
			return state;
	}
}

export default resume;