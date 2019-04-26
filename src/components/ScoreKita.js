import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {moveMenu} from "../redux/actions/menu";
import axios from 'axios';

class ScoreKita extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highScoreList: []
        }
    }

    componentWillMount() {
        axios.get('/get_high_score').then(res => {
            this.setState({highScoreList: res.data})
        });
    }

    render() {
        const {highScoreList} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-danger" onClick={() => {this.props.moveMenu('menu')}}><FontAwesomeIcon icon="chevron-left"/></button>
                        <h3 className="text-center">
                            <b>SCORE</b>
                        </h3>
                    </div>
                </div>
                <div className="table-responsive col-sm-10 offset-sm-1 pb-4">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th style={{border: 0, padding: 3}} width="6%"></th>
                            <th style={{border: 0, padding: 3}} width="47%">Nama</th>
                            <th style={{border: 0, padding: 3}} width="47%" className="text-right">Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            highScoreList.map((val, index) => (
                                <tr key={index}>
                                    <td style={{border: 0, padding: 3}}>{index+1}.</td>
                                    <td style={{border: 0, padding: 3}}>{val.name}</td>
                                    <td style={{border: 0, padding: 3}} className="text-right">{val.score}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    moveMenu: menuName => dispatch(moveMenu(menuName))
});

export default connect(null, mapDispatchToProps)(ScoreKita);
