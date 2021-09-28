
const http = new XMLHttpRequest;
http.open("GET","f");
http.send(null);
console.log(http.getResponseHeader());