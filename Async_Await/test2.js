function call () {
    return 5;
  }
  
  
  
  async function f() {
      let a = 0
      let promise = new Promise((resolve, reject) => {
        
        a = call()
        setTimeout(() => {
          resolve(a)}, 3000)
      });
    
      let result = await promise; // wait until the promise resolves (*)
    
      console.log(result); // "done!"
    }
    
    f();
    console.log("Hello")