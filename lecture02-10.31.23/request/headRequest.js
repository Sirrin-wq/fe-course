fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'HEAD'
})
.then(response => console.log(response.headers));