let recieved_payload = [];

const myTopic = "socialShape"; //YOU MUST CHANGE THIS!

// --- CONNECTING--------------------------------------
client.on("connect", function () {
  console.log("connected!");
  client.subscribe(myTopic);
});

// --- SEND MESSAGE --------------------------------------
function sendMessage(msg) {
  let JSONmsg = JSON.stringify(msg); //JSON.stringify turns any datatype into String/text
  client.publish(myTopic, JSONmsg);
}

// --- RECEIVING MESSAGE --------------------------------------
client.on("message", function (myTopic, message) {
  let msg = JSON.parse(message); //Decode JSON string
  // do your thing here when a message arrives--------
  
  //  If revieved payload array is not empty. Remove any old device data mathcing the new incomming device data id.
  if (recieved_payload.length) { 
    recieved_payload = removeRedundantDevices(msg, recieved_payload)
  };

  recieved_payload.push(msg);
  if(msg) {console.log(msg)}
});

// Loop though array and removes all deviceData matching the ID of the new incomming device data
function removeRedundantDevices(latesDevice, alldevices) {
  let uniqueChars = alldevices.filter((element) => {
      return element.id !== latesDevice.id
  });
  return uniqueChars;

} 

