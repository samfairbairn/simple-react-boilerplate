/*import {Record} from 'immutable';

const InitialState = Record({
	width: window.innerWidth,
	height: window.innerHeight
});

export const initialState = new InitialState;*/

const initialState = {
	width: window.innerWidth,
	height: window.innerHeight
};

export default function browser(state = initialState, action) {
	switch (action.type) {
		case 'RESIZE_BROWSER':
			/*return state
				.set('width', action.payload.width)
				.set('height', action.payload.height);*/
			return {
				width: window.innerWidth,
				height: window.innerHeight
			};
		default:
			return state;
	}
}
