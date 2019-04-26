import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';
import {moveMenu} from "../redux/actions/menu";

class Credit extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <button className="btn btn-danger" onClick={() => {this.props.moveMenu('menu')}}><FontAwesomeIcon icon="chevron-left"/></button>
                        <h2 className="text-center">CREDIT</h2>
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
