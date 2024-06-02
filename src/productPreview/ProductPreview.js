import React from 'react';
import classes from "./ProductPreview.module.css";
const Productpreview =(props) =>{
    const currentHour= new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours();
    const currentMinute=new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes();
 return(
    <div className={classes.productPreview}>
        <img src={props.currentPreviewImage}  alt="product preview"    />
        {
            props.showHeartBeatSection ? 
                <div className={classes.HeartBeatSection}>
                    < box-icon  name='heart' type='solid'  color='red' size="35px"></box-icon>
                <p >78</p>
               </div> 
               :
                <div className={classes.TimeSection}>
                   <p>{`${currentHour}:${currentMinute}`}</p>
                </div>
        }
    
  

  </div>
 );
}
export default Productpreview;