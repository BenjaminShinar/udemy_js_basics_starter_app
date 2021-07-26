# Stark Search

what did i learn from writing this?

1. To call a function when pressing a buton.
    add the *on click* event inside the html tag. parentheses are need. the surronding quotes are also important. we can stick curly braces if we want.
    ``` JavaScript
            <button for="search" class="material-icons search-button" onclick="onClickSearch()">search</button>

    ```
1. We can also use jQuery. when we the **dollar sign $**, it's probably jQuery.
    we define a jQuery event handler (using syntax similiar to css?) and the click method for it, and pass it an annonymous function.
    ``` javaScript
    $('.search-button').click(function() {
        alert("wwat!");
    })
    ```
1. [Ajax requests](https://api.jquery.com/jQuery.ajax/) - asynchronous javascript requests. responsea and callbacks.  
this objects has URL and setting objects. when the ajax finishes we do something
    ``` javescript
    $.ajax({
        url:"",
        dataType: "jsonp",
        jsonp: "callback"
    });
    ```
1. when we press a link the console is cleared. to disable this we need to [preserve the log](https://stackoverflow.com/questions/7124164/stop-the-console-log-clearing-when-you-click-a-link-in-google-chrome).
1. taking an elemeny by id.
    ``` javascript
    const searchString = $("#searchString");
    ```
1. forms have .submitMethod, which we access with jQuery and set the handler
    ``` javascript
    $('#form').submit(function()
    {
    //
    });
    ```
1. wikipedia API.  
end point, jsonp, callback...
1. arrow functions, forEach method for arrays
``` javascript
    [1,2,3].forEach(element=>{
        // do something with element
    })
```

## Ajax Stuff

* $(document).ready(function(){...})
* $(button).click(function(){...})
* $(element).load("text.txt")
* (form).submit(function(){...});


## what can i  next do

* rewrite this as react.
* use the inner array rather then construct the link myself