function touchStarted()
{

  // if (typeof DeviceMotionEvent.requestPermission === 'function') 
  // {
  //   DeviceMotionEvent.requestPermission()
  //           .then(permissionState => {
  //     if (permissionState === 'granted') 
  //       {
  //                   window.addEventListener("devicemotion", doAcc, false);
  //               }
  //             })
  //           .catch(console.error);
  //    } 
     
  //    else 
  // { 
  //   window.addEventListener("devicemotion", doAcc, false); 
    
  // }


  if (typeof DeviceOrientationEvent.requestPermission === 'function') 
  {
      DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
      if (permissionState === 'granted') 
        {
                    window.addEventListener("deviceorientation", setOrientation, false);
                }
              })
            .catch(console.error);
     } 
     
     else 
  { 
    window.addEventListener("deviceorientation", setOrientation, false); 
  }

  
}
