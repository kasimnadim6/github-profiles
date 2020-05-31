import React, { Component } from 'react'
import '../css/form.scss';
import '../css/button.scss';
import Axios from 'axios';

export default class form extends Component {
    state = {
        userName: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({
            userName:''
        })        
    }

    handleChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Github Username" value={this.state.userName}
                        onChange={this.handleChange} required />
                    <label className="form__label">Github Username</label>
                </div>
                <button className="btn-add">Add Card</button>
            </form>
        )
    }
}
