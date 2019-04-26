import axios from 'axios';
import {connectionError} from "./menu";

export const ADD_QUIZ = 'ADD_QUIZ';
export const CLEAR_QUIZ = 'CLEAR_QUIZ';

export const addQuiz = data => ({
    type: ADD_QUIZ,
    data
});

export const clearQuiz = () => ({
    type: CLEAR_QUIZ
});

export const getQuizData = () => async dispatch => {
    try {
        const quizData = await axios.get('/quiz');
        dispatch(addQuiz(quizData.data));
    } catch (e) {
        console.log('Get quiz data error');
        dispatch(connectionError());
    }
};
