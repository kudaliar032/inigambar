import React, {Component} from 'react';
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Jawab from "./components/Jawab";
import ModalMenu from "./components/ModalMenu";
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import swal from 'sweetalert2';

library.add(faChevronLeft);

class App extends Component {
    showConnectionError() {
        swal.fire({
            type: 'error',
            title: 'Koneksi gagal',
            text: 'Koneksi menuju server gagal dilakukan',
            confirmButtonText: 'Coba lagi'
        }).then(val => {
            window.location.reload();
        });
    }

    render() {
        return(
            <div>
                {
                    this.props.menu.connection ? (
                        <div>
                            <ModalMenu/>
                            <Header/>
                            <Quiz/>
                            <Jawab/>
                        </div>
                    ) : (
                        <div>
                            <div onLoad={this.showConnectionError()}></div>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: state.menu,
    play: state.play,
    quiz: state.quiz
});

export default connect(mapStateToProps)(App);
