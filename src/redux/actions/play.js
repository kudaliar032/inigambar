export const RESETQUIZ = 'RESETQUIZ';
export const TRUEANSWER = 'TRUEANSWER';
export const WRONGANSWER = 'WRONGANSWER';
export const PLAYGAME = 'PLAYGAME';

export const trueAnswer = () => ({
    type: TRUEANSWER
});

export const  wrongAnswer = () => ({
    type: WRONGANSWER
});

export const playGame = () => ({
    type: PLAYGAME
});

export const resetQuiz = () => ({
    type: RESETQUIZ
});
