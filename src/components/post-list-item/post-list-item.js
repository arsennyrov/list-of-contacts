import React, { Component } from "react";

import "./post-list-item.css";

export default class PostListItem extends Component {


  render() {
    const { name, phone, email, comment, onDelete, onToggleImportant, onToggleLiked,
            important, like} = this.props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }

    return (

      <div className={classNames}>
        <span className=" name"
        onClick={onToggleLiked}>{name}</span>

        <span className=" phone" 
            onClick={onToggleLiked}>{phone}</span>

        <span className=" email"
            onClick={onToggleLiked}>{email}</span>

        <span className=" comment"
            onClick={onToggleLiked}>{comment}</span>

        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-edit btn-sm" 
          onClick={onToggleImportant}>
         {/*   <i class="bi bi-pencil-fill"></i> */}
          E
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
            {/* <i className="fa fa-heart"></i> */}
        </div>
      </div>

    );
  }
}
