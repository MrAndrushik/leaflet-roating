import React from "react";

const Test = () => {
    const ref = React.useRef(null);
    var isResizing = false;
    const mouseHandler = (e) => {
        isResizing = true;
    };
    document.onmouseup = function (e) {
        isResizing = false;
    };
    document.onmousemove = function (e) {
        // we don't want to do anything if we aren't resizing.
        if (!isResizing) {
            return;
        } else {
            ref.current.style.width = e.clientX + "px";
        }
    };
    return (
        <div ref={ref} className="test">
            <div
                onMouseDown={(e) => mouseHandler(e)}
                className="test__drag"
            ></div>
        </div>
    );
};

export default Test;
