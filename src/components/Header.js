import React, {Component} from 'react';
import '../style.css';
import {connect} from 'react-redux';
import logo from '../img/inigambar.png';
import Heart from "react-star-rating-component";
import {FaHeart} from "react-icons/fa";

class Header extends Component {
    render() {
        const {score, heart} = this.props.play;
        return(
            <div className="row pt-3">
                <div className="col-sm-6">
                    <img
                        src={logo}
                        className="img-fluid col-sm-8 offset-sm-2"
                        alt="Logo tebak ini"
                    />
                </div>

                <div className="col-md-6">
                    <div className="row score-board text-white text-center mr-0">
                        <div className="col-sm-12 pt-3">
                            <h5><b>SCORE</b></h5>
                            <p>{score}</p>
                        </div>
                    </div>

                    <div className="row text-right">
                        <div className="col-sm-12" style={{fontSize: 25}}>
                            <Heart
                                name="nyawa"
                                renderStarIcon={() => <FaHeart style={{marginLeft: 4}}/>}
                                value={heart}
                                editing={false}
                                starColor="red"
                                emptyStarColor="#77797c"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    play: state.play
});

export default connect(mapStateToProps)(Header);
