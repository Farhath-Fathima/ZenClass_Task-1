// Http is Hypertext Transfer Protocol, it is the basic for almost all web application.


// *The first problem is HTTP1.1 transfer all the requests&responses in the plain text message form. 
// The second one is head of line blocking in which TCP connection is blocked all other requests until the response does not receive. 
// all the information related to the header file is repeated in every request.

// *when you make a request to the server for the Guvi.com page&server responds to you resource Guvi.com page. 
// before sending the request and the response there is a TCP connection established between client&server. 
// again you make request to the server for image. the server gives response as image. 
// the connection was not lost here after the first request.

// *because we add a keep-alive header which is the part of the request so there is an open connection between the server&client. 
// there is a persistent connection which means several requests&responses are merged in a single connection.
// These are the drawbacks that lead to the creation of HTTP2.

// objects and its internal representation in Javascript:

// *All JavaScript values, except primitives, are objects. object is a collection of named values.

// const patient = {firstName:"Fathima", lastName:"Farhath", age:22, eyeColor:"brown"};

// JavaScript objects are containers for named values, called properties and methods. Methods are actions that can be performed on objects.

// Property	Value
// firstName	Fathima
// lastName	Farhath
// age		    22
// eyeColor	brown