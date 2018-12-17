import React from 'react'

const Post = (props) => (
  <li className="CoursesList-item">
  
      <figure>
        
        
          <h2>{props.name}</h2>
        
      </figure>
    
    <section>
    <p>
        {props.poster} {props.name}
        </p>
      <p>
        <i className="fa fa-user"></i> 
        {props.cocinero}
      </p>
      <p>
        <i className="fa fa-calendar-o"></i>
        {props.date}
      </p>
      <p>
        <b>
          <i className="fa fa-dollar"></i>
          {props.amount}
        </b>
        <b>
          <i className="fa fa-key"></i>
          {props.id}
        </b>
      </p>
      <p>
        <i className="fa fa-tags"></i>
        {
          props.categories.map(
            (cat, index, arr) => 
              ( index === arr.length - 1 )
                ? cat
                : `${cat}, `
          )
        }
      </p>
    </section>
  </li>
)

export default Post