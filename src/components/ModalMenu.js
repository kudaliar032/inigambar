import React, {Component} from 'react';
import {Modal, ModalBody} from 'reactstrap';
import '../style.css';
import Menu from "./Menu";
import ScoreKita from "./ScoreKita";
import Credit from "./Credit";
import {connect} from 'react-redux';

class ModalMenu extends Component {
    render() {
        const {menuStatus, menuNow} = this.props.menu;
        return (
            <Modal isOpen={menuStatus} toggle={this.toggle}>
                <ModalBody>
                    {menuNow === 'menu'? <Menu/> : null}
                    {menuNow === 'score' ? <ScoreKita/> : null}
                    {menuNow === 'credit' ? <Credit/> : null}
                </ModalBody>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    menu: state.menu
});

export default connect(mapStateToProps)(ModalMenu);
