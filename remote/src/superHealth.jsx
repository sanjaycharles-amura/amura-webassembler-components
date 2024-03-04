import { useState } from "react";

export default (props) => {
   
    return (
     <div className="superhealth_wrapper">
         This is a section 
        <div className="superHealth">
            <div className="textWrapper">
                  <div className="heading">
                        {props.heading}
                  </div>
                  <div className="body">
                        Unlock Super Health !!
                  </div>
            </div>
            <div class="imageWrapper">
                  <div>
                     Image Wrapper
                  </div>
            </div>
        </div>
     </div>
    );
  };
  