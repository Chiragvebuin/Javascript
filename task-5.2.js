document.body.addEventListener('click', function() {
    header.style.color = 'blue';
});

/*
This works because the event listener is being attached to the body element, 
which means that every time the body is clicked, the callback function inside 
the addEventListener method will be executed. The callback function changes the color of the "header" variable 
(which was previously selected using the querySelector method) to blue.

It's important to note that the IIFE is executed immediately after it is defined,
and assigns the value of the h1 element to the header variable and sets its color to red.
The event listener is then attached to the body element,
and will only be called when the body is clicked,it does not need to select the h1 element again.
This allows the IIFE to execute its code and set the initial color of the header, 
while the event listener can change the color of the header on subsequent clicks.
*/