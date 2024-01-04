const myAwesomePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
    // reject({ done: false });
  }, 2000);
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });



  
  
  fetch('url', { headers: {
    Accept: 'application/json',
  } });