"use strict";
const Http = require("http"); // importiert Datei als http
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server"); //Konsolenausgabe "Starting server"
    let port = process.env.PORT; //port ist eine nummer
    if (port == undefined)
        port = 8100; //...dann soll port 8100 sein 
    let server = Http.createServer(); //variable server vom Typ Http.Server 
    server.addListener("request", handleRequest); // Listener auf request
    server.addListener("listening", handleListen); //Listerner auf listening 
    server.listen(port); //Listener auf Server, welcher Port wird benutzt
    function handleListen() {
        console.log("Listening"); // Konsolenausgabe Listening
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe von i heare voices
        _response.setHeader("content-type", "text/html; charset=utf-8"); //dem header werden die werte die "content-type", "text/html; charset=utf-8", damit die Nachrricht ausgegeben werden kann
        _response.setHeader("Access-Control-Allow-Origin", "*"); //dem header wird Access-Control-Allow-Origin hinzugefügt, erlaubt die Aussage des Nutzers mit der Quelle zu teilen
        _response.write(_request.url); //Ruft Informationen über die URL der aktuellen Anforderung ab.
        _response.end(); //konversation wird beendet
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=server.js.map