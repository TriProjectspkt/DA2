import React, { Component } from 'react';

import Modal from './Modal';
import './App.scss';
import logo from './logo.svg';
class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                      <div className="body-content">
                        <div className="ava-container">
                            <img src={logo} alt="ava" ></img>
                            <div className="middle"><p>Edit Ava</p></div>
                        </div>
                        <h3 className="user-name">Tri</h3>
                        <div className="Phone">
                            <h4>
                                Phone:
                            </h4>
                            <p>
                                +8412312312
                            </p>
                        </div>
                        <div className="Sex">
                        <h4>Sex:</h4>
                        <p>Male</p>
                        </div>
                        <div className="DateOfBirth">
                        <h4>Date Of Birth:</h4>
                        <p>20/12/2019</p>
                        </div>
                      </div>
                </Modal>
            </div>
        );
    }
}

export default App;

