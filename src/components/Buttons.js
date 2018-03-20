import React from 'react';
import '../styles/Buttons.css';

export function SplashButton(props) {
    return(
        <a id={props.id} className="Button" data-primary={props.primary} onClick={props.onClick}>
            {props.text}
        </a>
    );
}