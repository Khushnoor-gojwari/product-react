import React from "react";
import classes from "./ProductDetails.module.css";

const ProductDetails =(props)=>{
    const colorOptions=props.data.colorOptions.map((item,pos)=>{
        const classArr=[classes.ProductImage]
        if(pos===props.currentPreviewImagepos){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} 
            onClick={()=> props.onColorOptionClick(pos)} alt={item.styleName} 
            />
        );
    })
    const featureList=props.data.featureList.map((item,pos)=>{
        const classArr=[classes.FeatureItem];
        if(pos==0){
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button onClick={()=> props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
        );
    })
    return(
        <div className={classes.ProductData}>
          <h2>{props.data.title}</h2>
          <p>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {colorOptions}
            
          </div>
            <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
            
          </div>
          <button onClick={()=>props.BuyButtonClicked()} className={classes.primarybtn}> Buy me </button>

        </div>
    );
}
export default ProductDetails;