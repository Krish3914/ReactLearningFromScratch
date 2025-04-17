import React from 'react'

function InlineCssButton() {
    const style = {
        backgroundColor: "Green",
        color: "White",
        cursor: "pointer",
    }
    return(
        <button style={style}>
            Click Me!
        </button>
    );
}

export default InlineCssButton