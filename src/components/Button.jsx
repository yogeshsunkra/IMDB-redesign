import React from "react";

const Button = ({className,href,onClick,px,children,textClass}) => {

    const classes = ` button relative inline-flex items-center p1
    ${px ||"px-7"} ${className || ""}`;

    const spanclasses = `relative z-10 ${textClass || ""}`;

    const renderButton = ()=>(
        <button className={classes} onClick={onClick}>
            <span className={spanclasses}>{children}</span>
        </button>
    );

    const renderLink = ()=>(
        <a href={href} className={classes}>
            <span className={spanclasses}>{children}</span>
        </a>
    )

      

  return href ? renderLink() : renderButton();
  
}

export default Button;
