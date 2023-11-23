import React from "react";

const Input = (props) => {
    return (
        <div>
            <input
                placeholder={props.placeholder}
                className={"w-[100%] h-[40px] rounded-tl-[8px] rounded-br-[8px] px-3 mb-[10px]"}
                type={props.type}
                name={props.name}
                error={props.error}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
            />
        </div>
    );
}

export default Input;