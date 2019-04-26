import {ADD_QUIZ, CLEAR_QUIZ} from "../actions/quiz";

const quiz = (state = [], action) => {
    switch (action.type) {
        case ADD_QUIZ:
            return [...action.data];

        case CLEAR_QUIZ:
            return [];

        default:
            return state;
    }
};

export default quiz;
