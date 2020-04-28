const initControllers = function(){
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
    //const formData = {} <=> const formData = new Object();
    const formData = new Object(); //dictinoary is a key/value pair collection
    formData[name] = document.getElementById('name').value; //dictionary object: formData key: name, is assigned value entered into HTML element
    formData[message] = document.getElementById('message').value; //dictionary object: formData key: message, is assigned value entered into HTML element

    postToGoogleDB(formData);
}

initControllers(); //initControllers function is not hoisted, so it, and everthing it refernces, has to be defined before the function is invoked

//  const initControllers = function(){
    //     const submitButton = document.getElementById('submit');
    //     submitButton.addEventListener('click', submitEvent);
    //     }
    //     const submitEvent = function(){
    //     const formData = new Object();
    //     formData[name] = document.getElementById('name').value;
    //     formData[message] = document.getElementById('message').value;
    //     postToGoogleDB(formData);
    //     }
    
    // initControllers(); //Must be last line of code