import React, { Component } from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            comment: ''
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    onPhoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    onCommentChange(e) {
        this.setState({
            comment: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(
            this.state.name,
            this.state.phone,
            this.state.email,
            this.state.comment
        );

        this.setState({
            name: '',
            phone: '',
            email: '',
            comment: ''
        });
    }

    render() {
        return (
            <>
                <form className="bottom-panel d-flex"
                    onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        placeholder="Введите ф.и.о."
                        className="form-control input-name"
                        onChange={this.onNameChange}
                        value={this.state.name}
                    />

                    <input
                        type="text"
                        placeholder="Введите телефон"
                        className="form-control input-phone"
                        onChange={this.onPhoneChange}
                        value={this.state.phone}
                    />
                    <input
                        type="email"
                        placeholder="Введите Email"
                        className="form-control input-email"
                        onChange={this.onEmailChange}
                        value={this.state.email}
                    />
                    <input
                        type="text"
                        placeholder="Введите коментарий"
                        className="form-control input-comment"
                        onChange={this.onCommentChange}
                        value={this.state.comment}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-secondary btn-form">
                        Добавить</button>
                </form>
                <span className="help">
                    Для редактирования любого поля необходимо сделать клик на нем.
                </span>
            </>
        )
    }
}

