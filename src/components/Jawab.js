import React, {Component} from 'react';
import '../style.css';
import {connect} from 'react-redux';
import axios from 'axios';
import {trueAnswer, wrongAnswer, resetQuiz} from '../redux/actions/play';
import swal from 'sweetalert2';
import swalReact from 'sweetalert2-react-content';
import {moveMenu, showMenu} from "../redux/actions/menu";
import moment from 'moment';

const mySwal = swalReact(swal);

class Jawab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            highScoreNow: {
                score: 0,
                time: 0
            },
        };

        this.getHighScore = this.getHighScore.bind(this);
        this.resetAnswerForm = this.resetAnswerForm.bind(this);
    }

    componentDidUpdate() {
        this.inputAnswer.focus();
    }

    componentWillMount() {
        this.getHighScore();
    }

    async getHighScore() {
        try {
            const scoreList = await axios.get('/get_high_score');
            this.setState({highScoreNow: {score: scoreList.data[0].score, time: scoreList.data[0].time} });
        } catch (e) {
            console.log('Get high score error');
        }
    }

    async highScore() {
        try {
            const {score, startTime} = this.props.play;
            const playTime = moment().unix() - startTime;

            if ((score > this.state.highScoreNow.score) || (score === this.state.highScoreNow.score && playTime < this.state.highScoreNow.time)) {
                const {value: name} = await mySwal.fire({
                    input: 'text',
                    title: 'Wah, kamu masuk score kita.',
                    inputPlaceholder: 'Masukin nama kamu'
                });

                if (name) {
                    const url = `/add_high_score/${encodeURI(name)}/${score}/${playTime}`;
                    axios.get(url).then(res => {
                        this.props.resetQuiz();
                        this.props.showMenu();
                        this.props.moveMenu('score');
                    });
                }
            } else {
                console.log('Quiz Reset');
                this.props.resetQuiz();
                this.props.showMenu();
            }
        } catch (e) {
            console.log(e);
        }
    }

    async checkAnswer(e) {
        try {
            e.preventDefault();
            const totalQuiz = this.props.quiz.length;
            const allQuiz = this.props.quiz;
            const quizNumber = this.props.play.quizNumber;
            const quizId = allQuiz[quizNumber].id;
            const url = `/check_answer/${quizId}/${encodeURI(this.state.answer)}`;
            const answerIs = await axios.get(url);

            if (answerIs.data) {
                await this.resetAnswerForm();
                await this.props.trueAnswer();

                if (quizNumber < totalQuiz - 1) {
                    mySwal.fire({
                        type: 'success',
                        title: 'Benar',
                        text: 'Jawaban kamu benar sekali',
                        confirmButtonText: 'Lanjut',
                        allowOutsideClick: false
                    });
                } else {
                    mySwal.fire({
                        type: 'success',
                        title: 'Selamat!',
                        text: 'Jawaban kamu benar sekali, dan kamu udah nyelesein semua quiz',
                        confirmButtonText: 'Selesai',
                        allowOutsideClick: false
                    }).then(() => {
                        this.highScore();
                    });
                }
            } else {
                const {heart} = this.props.play;
                this.resetAnswerForm();
                this.props.wrongAnswer();

                if (heart > 1) {
                    mySwal.fire({
                        type: 'error',
                        title: 'Salah!',
                        text: 'Jawaban kamu masih belum tepat, coba lagi',
                        confirmButtonText: 'Coba lagi',
                        allowOutsideClick: false
                    });
                } else {
                    mySwal.fire({
                        type: 'error',
                        title: 'Game Over!',
                        text: 'Jawaban kamu masih salah, dan nyawa kamu sudah habis',
                        confirmButtonText: 'Selesai',
                        allowOutsideClick: false
                    }).then(() => {
                        this.highScore();
                    })
                }
            }
        } catch (e) {
            console.log('error');
        }
    }

    resetAnswerForm() {
        this.setState({answer: ''});
    }

    getAnswer(e) {
        const answer = e.target.value;
        this.setState({
            answer
        });
    }

    render() {
        return (
            <form className="pt-3" onSubmit={this.checkAnswer.bind(this)}>
                <div className="input-group input-group-lg mb-3">
                    <input
                        type="text"
                        className="form-control no-rounded"
                        placeholder="Masukan jawaban anda"
                        value={this.state.answer}
                        onChange={this.getAnswer.bind(this)}
                        ref={input => (this.inputAnswer = input)}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-success no-rounded"
                            type="submit"
                        >JAWAB</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    trueAnswer: () => dispatch(trueAnswer()),
    wrongAnswer: () => dispatch(wrongAnswer()),
    resetQuiz: () => dispatch(resetQuiz()),
    showMenu: () => dispatch(showMenu()),
    moveMenu: menuName => dispatch(moveMenu(menuName))
});

const mapStateToProps = state => ({
    quiz: state.quiz,
    play: state.play
});

export default connect(mapStateToProps, mapDispatchToProps)(Jawab);
