import React from 'react'
import newComponent from './HigherComp';

function FuncHover(props) {
    const { fontSize, incrementSize } = props;
    return (
        <div>
            <button onMouseOver={() => incrementSize()}>Increase font</button>
            <p style={{ fontSize }}>Font size is {fontSize}</p>
        </div>
    )
}

export default newComponent(FuncHover)

// Higher order comp are those which take component and return new component.
// HOC are used for reusing a component logic
// Normal components converts prop to UI but HOC converts component to another component.