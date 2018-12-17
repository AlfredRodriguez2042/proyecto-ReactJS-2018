import React from 'react';

export default class Api extends React.Component{

    render(){
        return(
<div>
    {this.props.arrayPost.map(
        row=>
        <div>{row.title}</div>
       
       
    )}
</div>
        );
    }
}