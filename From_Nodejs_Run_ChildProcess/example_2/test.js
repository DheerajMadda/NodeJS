var spawn = require('child_process').spawn
py = spawn('python', ['compute.py'])
dataString = ''

var dateTimeString = "06-12-2019 19:13:43"
var match = dateTimeString.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/)
var timeStamp = new Date(match[3], match[2] - 1, match[1], match[4], match[5], match[6]).getTime() / 1000

//We have to stringify the data first otherwise our python process wont recognize it.
py.stdin.write(JSON.stringify(timeStamp))
py.stdin.end()

//Here we are saying that every time our node application receives data from the python process output stream(on 'data'), 
//we want to convert that received data into a string and append it to the overall dataString.
py.stdout.on('data', function(data){
  dataString += data.toString()
})

//Once the stream is done (on 'end') we want to simply log the received data to the console.
py.stdout.on('end', function(){
  console.log('Date-Time : ',dataString)
})
