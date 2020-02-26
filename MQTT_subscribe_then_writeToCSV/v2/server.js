 const createCsvWriter = require('csv-writer').createObjectCsvWriter;
 const csvWriter = createCsvWriter({
     path: 'out.csv',
     header: [
       {id: 'dateTime', title: 'Date and Time'},
       {id: 'tStamp', title: 'Timestamp'},
       {id: 'temp', title: 'Temperature'},
       {id: 'humi', title: 'Humidity'},
       {id: 'co', title: 'Carbon Monoxide'},
       {id: 'rain', title: 'Rain'}
     ]
   });

var moment = require('moment')
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 
client.on('connect', function () {
  client.subscribe('/iot/log', function (err) {
    if (err) throw err
  })
})


var i = 1

client.on('message', function (topic, message) {
    var data = message.toString()
    var dataArray = data.split("/")
    var temperature = dataArray[0]
    var humidity = dataArray[1]
    var co = dataArray[2]
    var rain = (dataArray[3] == "1") ? "Present" : "Absent" 
    //console.log(`Temperature: ${temperature} | Humidity: ${humidity} | CO gas: ${co} | Rain: ${rain}`)
    console.log(i++)

    
    var current_TimeStamp = Date.now() / 1000 | 0
    var current_DateTime = moment(current_TimeStamp * 1000).format("DD-MM-YYYY H:mm:ss")
    
    const _data = [
        {
         dateTime: current_DateTime,
         tStamp: current_TimeStamp,
         temp: temperature,
         humi: humidity,
         co: co,
         rain: rain
        }]
    
    csvWriter.writeRecords(_data)


    
}); 



