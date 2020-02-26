// 1. current Date to Timestamp (in seconds)
var currentTimestamp = Date.now() / 1000 | 0
//or
//var currentTimestamp = Math.floor(Date.now() / 1000)
console.log(currentTimestamp)

//--------------------------------------------------------------------------

// 2. Timestamp to Date-Time format
var moment = require('moment')
var into_milliSeconds = currentTimestamp * 1000
var dateTime = moment(into_milliSeconds).format("DD-MM-YYYY H:mm:ss")
console.log(dateTime)

//--------------------------------------------------------------------------

// 3. user defined Date-Time format to Timestamp
var dateTimeString = dateTime
//var dateTimeString = "29-08-2012 16:08:22"
var match = dateTimeString.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)$/)
var timeStamp = new Date(match[3], match[2] - 1, match[1], match[4], match[5], match[6]).getTime() / 1000
console.log(timeStamp)
 