import React from "react";
import StyledButton from "./StyledButton";

const Button = ({ onClickHandler, className, children, ariaLabel,disabled,bg,text,type}) => (
    <StyledButton
    bg={bg}
    text={text}
        disabled={disabled}
        className={className}
        type={type}
        onClick={onClickHandler}
        aria-label={ariaLabel}
    >{children}
    </StyledButton>
);

export default Button;
