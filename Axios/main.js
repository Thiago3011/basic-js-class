axios.get('http://api.github.com/users/diego3g')
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.warn(console.error());
});
