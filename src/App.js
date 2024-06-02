import classses from'./App.module.css'; // Assuming you have styles in this file
import React,{Component} from 'react';

import ProductData from './ProductData'
import Productpreview from './productPreview/ProductPreview';
import ProductDetails from './productDetails/ProductDetails';
import TopBar from './topBar/TopBar';
 class  App extends Component {
   state={
    productData:ProductData,
    currentPreviewImagepos:0,
   
    showHeartBeatSection:false,
   }
   onColorOptionClick=(pos)=>{
    this.setState({currentPreviewImagepos:pos})
   }
   onFeatureItemClick=(pos)=>{
   let updatedState=false;
   if(pos == !updatedState){
    updatedState=true;
   }
   this.setState({showHeartBeatSection:updatedState})
   }
   BuyButtonClicked=()=>{
    alert("item bought ");
   }

   render(){
    return (
      <div className='App'>
        <TopBar/>
        <div className={classses.MainContainer}>
          <Productpreview currentPreviewImage={this.state.productData.colorOptions[
            this.state.currentPreviewImagepos].imageUrl } 
          showHeartBeatSection={this.state.showHeartBeatSection}
          />
          <ProductDetails data={this.state.productData} 
           onColorOptionClick={this.onColorOptionClick}
           currentPreviewImagepos={this.state.currentPreviewImagepos}
           onFeatureItemClick={this.onFeatureItemClick}
           BuyButtonClicked={this.BuyButtonClicked}
           />
            
        </div>
      </div>
      
    );
   }
 
}

export default App;
