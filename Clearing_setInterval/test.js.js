var t1 = (Date.now() / 1000 | 0) + 60
var t2 = Date.now() / 1000 | 0
console.log(t2)
console.log("--------------------------")




var diff = undefined;

var refreshID = setInterval(() => {
                    diff = t1 - 1
                    t1 = diff
                    console.log(diff)

                    if (diff == t2) clearInterval(refreshID);
                }, 1000);



// setInterval(()=>{
//     console.log("hello")
// },1000)