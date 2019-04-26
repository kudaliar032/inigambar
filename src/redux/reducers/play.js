import {} from "../actions/play";
import {TRUEANSWER} from "../actions/play";
import {RESETQUIZ} from "../actions/play";
import {WRONGANSWER} from "../actions/play";
import {PLAYGAME} from "../actions/play";
import moment from 'moment';

const initialState = {
    quizNumber: 0,
    heart: 5,
    score: 0,
    startTime: 0
};

const play = (state = initialState, action) => {
    switch (action.type) {
        case TRUEANSWER:
            return {
                ...state,
                quizNumber: state.quizNumber+1,
                score: state.score+10
            };

        case WRONGANSWER:
            return {
                ...state,
                heart: state.heart-1
            };

        case PLAYGAME:
            return {
                ...state,
                startTime: moment().unix()
            };

        case RESETQUIZ:
            return initialState;

        default:
            return state;
    }
};

export default play;
