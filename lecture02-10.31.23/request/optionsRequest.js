fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'OPTIONS'
})
.then(response => console.log(response.headers))
.catch(error => console.error(error));