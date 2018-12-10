import React from 'react';
import placeholderImg from '../placeholder.jpg';

export class ListItem extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <li className={"location-item"}>
                <span className={'type'}>{this.props.options.type}</span>
                <img src={placeholderImg} />
                <h2>{this.props.options.address}</h2>
                <span>{this.props.options.baths} {` bathroom${this.props.options.baths === 1 ? '' : 's' }`}</span>
            </li>
        )
    }

}