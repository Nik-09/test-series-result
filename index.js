console.log('hello')
function getData() {
    console.log('Getting data..')
    fetch("result.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}