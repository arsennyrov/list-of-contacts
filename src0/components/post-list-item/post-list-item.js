import React, { Component } from "react";

import "./post-list-item.css";

export default class PostListItem extends Component {

  state = {
    eee: 0
  }

  onDelete1 =(e) => {
    ee = e.target.className;

    this.setState({ eee: e.target.className });
}

  render() {
    const { name, phone, email, comment, onDelete,
            nameItem, phoneItem, emailItem, commentItem } = this.props;

    return (

      <div className="app-list-item d-flex justify-content-between">
        <span className=" name"
            onClick={nameItem}>{name}</span>

        <span className=" phone" 
            onClick={phoneItem}>{phone}</span>

        <span className=" email"
            onClick={emailItem}>{email}</span>

        <span className=" comment"
            onClick={commentItem}>{comment}</span>

        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-trash btn-sm" onClick={this.onDelete1}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>

    );
  }
}
