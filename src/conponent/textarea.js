import React from "react";

const TextArea = (props) => {
    return (
        <textarea
            rows="5"
            className="w-[100%] rounded-tl-[8px] rounded-br-[8px] p-3 mb-[30px]"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
        />
    );
}

export default TextArea;