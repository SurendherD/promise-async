const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getallcookies(){
  return cookies;
}
  // Progression 2: using setTimeout() -- use 1000 units for time parameter
function getcookiesDelayed(){
  setTimeout(()=>{
    let result;
    let cookies=getallcookies();
    cookies.forEach((cookie)=>{
      result=result+`<li>${cookie.name}</li>`
    });
    document.body.innerHTML=result;
  },1000);
}


//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookie(newCookie){
  return new Promise((resolve,reject)=>{
        // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    setTimeout(()=>{
      // Progression 5: handling errors and adding new cookie to the list
      cookies.push(newCookie);
      const error = false;
      if(!error){
        resolve();
      }
      else{
        reject('no cookies')
      }
    },2000);
  }
  );
};

// Progression 6: call function using `.then`
createCookie(newCookie).then(getcookiesDelayed);

