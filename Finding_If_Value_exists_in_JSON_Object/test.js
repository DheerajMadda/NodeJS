var requestString = {
    "connect" : ["connect to my project", "connect to my project server", "connect to my project database"],
    "disconnect" : ["disconnect to my project", "disconnect to my project server", "disconnect to my project database"],
    "temperature" : ["what's the status of temperature", "what is the status of temperature", "give me the status of temperature", "get me the status of temperature"],
    "humidity" : ["what's the status of humidity", "what is the status of humidity", "give me the status of humidity", "get me the status of humidity"],
    "carbonMonoxideGas" : ["what's the status of carbon monoxide gas", "what is the status of carbon monoxide gas", "give me the status of carbon monoxide gas", "get me the status of carbon monoxide gas"],
    "rain" : ["what's the status of rain", "what is the status of rain", "give me the status of rain", "get me the status of rain"],
    "all" : ["what's the status", "what is the status", "give me the status", "get me the status"],
    "empty" : "nothing"
}


function hasValueDeep(json, findValue) {
    const values = Object.values(json);
    let hasValue = values.includes(findValue);
    values.forEach(function(value) {
        if (typeof(value) === "object") {
            hasValue = hasValue || hasValueDeep(value, findValue);
        }
    });
    return hasValue;
}

console.log(hasValueDeep(requestString,"connect to my project"))