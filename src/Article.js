import React, { Component } from "react";


function Article(props) {
    return  (
        <article className="mktg">
            <div>
              <img src={props.img} alt="" width="80px" />
            </div>
            <h3>{props.title} </h3>
            <div>{props.description} </div>
          </article>
    )

}

export default Article;