import React from "react";
import classes from "./TopBar.module.css";

const TopBar=()=>{
  return (
    <div className={classes.header}>
        <div className={classes.topbar}>
            <img className={classes.imga1} src="https://www.amazon.in/favicon.ico" alt="Amazon Logo" />
            <span><h3 className={classes.h31}>amazon.in</h3></span>
        </div>
    </div>
  );
}
export default TopBar;