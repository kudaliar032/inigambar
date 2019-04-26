import React, {Component} from 'react';
import inigambar from "../img/inigambar.png";
import {connect} from 'react-redux';
import {mainYuk, moveMenu} from "../redux/actions/menu";
import {playGame} from "../redux/actions/play";

class Menu extends Component {
    play = () => {
        this.props.mainYuk();
        this.props.playGame();
    };

    render() {
        return (
            <div>
                <div className="row py-5">
                    <div className="col-sm-6 offset-sm-3">
                        <img src={inigambar} className="img-fluid" alt={"Logo ini gambar"} />
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-sm-8 offset-sm-2">
                        <button
                            className="btn btn-block btn-outline-danger btn-lg"
                            onClick={this.play.bind(this)}
                        ><b>Main</b>
                        </button>

                        <button
                            className="btn btn-block btn-outline-danger btn-lg"
                            onClick={() => {this.props.moveMenu('score')}}
                        ><b>Score</b>
                        </button>

                        <button
                            className="btn btn-block btn-outline-danger btn-lg"
                            onClick={() => {this.props.moveMenu('credit')}}
                        ><b>Credit</b>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = disptach => ({
    mainYuk: () => disptach(mainYuk()),
    moveMenu: menuName => disptach(moveMenu(menuName)),
    playGame: () => disptach(playGame())
});

export default connect(null, mapDispatchToProps)(Menu);
