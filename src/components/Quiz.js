import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getQuizData} from "../redux/actions/quiz";
import loading_soal from "../img/load_images.gif";

class Quiz extends Component {
    componentWillMount() {
        this.props.getQuizData();
    }

    render() {
        const {quizNumber} = this.props.play;
        const totalQuiz = this.props.quiz.length;

        if (quizNumber < totalQuiz) {
            return (
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.props.quiz.length > 0 ?
                                <img
                                    className="img-fluid no-rounded"
                                    style={{border:'5px solid #B7B7B7'}}
                                    src={`http://inigambar.tepuntal.com/images/${this.props.quiz[quizNumber].image}`}
                                    width="100%"
                                    alt="soal"
                                />
                                :
                                <img
                                    className="img-fluid no-rounded"
                                    style={{border:'5px solid #B7B7B7'}}
                                    src={loading_soal}
                                    width="100%"
                                    alt="loading soal"
                                />
                        }

                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

const mapStateToProps = state => ({
    quiz: state.quiz,
    play: state.play
});

const mapDispatchToProps = dispatch => ({
    getQuizData: () => { dispatch(getQuizData()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
