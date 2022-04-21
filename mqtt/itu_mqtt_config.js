// --- SETTING UP --------------------------------------
const myBroker = "wss://edp21:Ko5z2bU0Uf7ajNzv@edp21.cloud.shiftr.io"; 
const myID = "itu" + parseInt(Math.random() * 10000000, 10); //Construct a random unique ID
const client = mqtt.connect(myBroker, {clientId: myID});
