 const createCsvWriter = require('csv-writer').createObjectCsvWriter;
 const csvWriter = createCsvWriter({
     path: 'out.csv',
     header: [
       {id: 'time', title: 'Time in seconds'},
       {id: 'temp', title: 'Temperature'},
       {id: 'humi', title: 'Humidity'}
     ]
   });

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  client.subscribe('Alex', function (err) {
    if (err) throw err
  })
})

client.on('message', function (topic, message) {
    var data = message.toString();
    var dataArray = data.split("/");
    var temperature = dataArray[0];
    var humidity = dataArray[1];
    var co = dataArray[2];
    var rain = dataArray[3];
    console.log(`Temperature: ${temperature} | Humidity: ${humidity} | CO gas: ${co} | Rain: ${rain}`)
 
     var today = new Date();
     var hr = today.getHours();
     var min = today.getMinutes();
     var sec = today.getSeconds();
     var current_time_in_seconds = hr*3600 + min*60 + sec;

     const _data = [
         {
           time: current_time_in_seconds,
           temp: temperature,
           humi: humidity
         }]
    
    
     csvWriter.writeRecords(_data)
}); 



