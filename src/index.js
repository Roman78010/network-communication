function searchUsersByQuery (query) {
  const baseUrl = 'https://api.github.com/search/users';
  const queryString = `?q=${query}`;

  const url = baseUrl + queryString;

  // const response = fetch(url); // Получаем Promise объект (не его значение). Значение мы получаем с помощью метода then. 
  // console.log(response);


  // fetch(url).then(response => console.log(response)); // Из-за асинхроности fetch(url) выполниться и дальше интерпретатор пойдет дальше пропустив метод then выполняться и выполнит console.log('test');.
  
  // console.log('test');
  

  // fetch(url).then(response =>response.json()); // Callback функции положиться в очередь и метод then выполниться тогда, когда за`resolved`ица fetch (когда у него прозойдет "событие" resolved). 
  

  // fetch(url, { method: 'GET' })
  //   .then(response => { // Если мы возвращаем значение из этого then`а оно прокидывается в в следущий then, как параметр.
  //     // return 4;
  //     return response.json();
  //   })
  //   .then(res => {
  //     console.log(res);
  //   });

    // console.log('test');


    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(e => console.error(e));

    
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        const { items } = data; // У нас есть объект data в нем есть поле items.
        // const items = data.items; // То же что и предыдущая строчка.
        return items.map(profile => profile.login);
      })
      .catch(e => console.error(e));
}

function renderLoginList(loginList) {
  const ul = document.createElement('ul');
  loginList.forEach(login => {
    const li = document.createElement('li');
    li.innerText = login;
    ul.appendChild(li);
  });
  document.body.append(ul);
}

searchUsersByQuery('abra').then(loginList => {
  renderLoginList(loginList);
});


// async function searchUsersByQuery (query) {
//   const baseUrl = 'https://api.github.com/search/users';
//   const queryString = `?q=${query}`;

//   const url = baseUrl + queryString;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   }
// }

// searchUsersByQuery('abramenal');