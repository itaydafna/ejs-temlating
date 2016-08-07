// // load the template file, then render it with data
// var html = new EJS({url: 'beatles.ejs'}).render(data);


function makeRequest() {
    var promise = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://jsonstub.com/ejs-template');
        xhr.setRequestHeader("content-type", 'application/json');
        xhr.setRequestHeader('JsonStub-User-Key', 'd4d6c613-b765-4bc3-9d31-9a42c2335f12');
        xhr.setRequestHeader('JsonStub-Project-Key', '5804a207-3124-42c3-9ae7-a1fb2c8b460b');
        xhr.send(null);
        xhr.addEventListener("load", function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response))
            }
            else if (xhr.status === 404) {
                reject(new Error("it didn't work :("));
            }


        });
    })
    return promise;
}

makeRequest().then(function(data){
    console.log(data);
    var html = new EJS({url: 'beatles.ejs'}).render(data),
        body = document.querySelector("body");
        body.innerHTML = html;


});

  // return promise.then(function(json){new EJS({url: 'beatles.ejs'}).update('container', json)})
