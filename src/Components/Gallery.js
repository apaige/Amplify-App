

import React from "react";
import Amplify from "aws-amplify";
import {AmplifyS3Album} from "@aws-amplify/ui-react/legacy";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

function Gallery() {

return (

  <div>
    <h1 style={{'text-align':'center'}}>My Gallery</h1>        
    <AmplifyS3Album />
  </div>
);

}

export default Gallery;