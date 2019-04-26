import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';
import {moveMenu} from "../redux/actions/menu";
import '../style.css';
import bootstrap from '../img/credits/bootstrap.png';
import ci from '../img/credits/codeigniter.png';
import github from '../img/credits/github.png';
import gitlab from '../img/credits/gitlab.png';
import heroku from '../img/credits/heroku.png';
import mariadb from '../img/credits/mariadb.png';
import nodejs from '../img/credits/nodejs.png';
import reactjs from '../img/credits/reactjs.png';
import redux from '../img/credits/redux.png';

class Credit extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-danger" onClick={() => {this.props.moveMenu('menu')}}><FontAwesomeIcon icon="chevron-left"/></button>
                        <h2 className="text-center">CREDITS</h2>
                        <div className="credit-container">
                            <a href="https://getbootstrap.com" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="Bootstrap" src={bootstrap}/></a>
                            <a href="https://codeigniter.com" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="Codeigniter" src={ci}/></a>
                            <a href="https://github.com" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="GitHub" src={github}/></a>
                            <a href="https://gitlab.com" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="GitLab" src={gitlab}/></a>
                            <a href="https://www.heroku.com" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="Heroku" src={heroku}/></a>
                            <a href="https://mariadb.org" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="MariaDB" src={mariadb}/></a>
                            <a href="https://nodejs.org" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="Node.JS" src={nodejs}/></a>
                            <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="ReactJS" src={reactjs}/></a>
                            <a href="https://redux.js.org" rel="noopener noreferrer" target="_blank"><img className="credit-logo" alt="Redux" src={redux}/></a>

                            <div style={{marginTop: 20}}>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/kudaliar032/web-inigambar">
                                    <button type="button" className="btn btn-link">View on GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       );
    }
}

const mapDispatchToProps = dispatch => ({
    moveMenu: menuName => dispatch(moveMenu(menuName))
});

export default connect(null, mapDispatchToProps)(Credit);
