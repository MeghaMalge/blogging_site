import React from "react";
import StyledButton from "./StyledButton";

const LikeButton = ({ onClickHandler, className, children, ariaLabel,disabled,liked}) => (
    <StyledButton
    liked={liked}
        disabled={disabled}
        className={className}
      type="button"
        onClick={onClickHandler}
        aria-label={ariaLabel}
    >{children}
    </StyledButton>
);

export default LikeButton;
