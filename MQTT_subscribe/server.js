var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.43.72')

client.on('connect', function () {
  client.subscribe('data', function (err) {
    if (err) throw err
  })
})

client.on('message', function (topic, message) {
    var data = message.toString();
    var dataArray = data.split("/");
    var temperature = parseFloat(dataArray[1]);
    var humidity = parseFloat(dataArray[2]);
    var co = parseInt(dataArray[3]);
    var rain = (dataArray[4] == "1") ? "Present" : "Absent";
    console.log(`Temperature: ${temperature} | Humidity: ${humidity} | CO gas: ${co} | Rain: ${rain}`)
 
}); 



