import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data }

        case FETCH_POSTS:
            // take current state and add all
            return { ...state, all: action.payload };
        default:
            return state;
    }
}