import React from "react";

const person = (props) => {
    return (
        <div>
            <p>Hello, I'm {props.name} and I'm {props.age} years old.</p>
            {props.children}
        </div>
    )
};

export default person;