import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <label>Username</label>
                    <input />
                    <label>Password</label>
                    <input />
                </div>
            </div>
        )
    }
}
