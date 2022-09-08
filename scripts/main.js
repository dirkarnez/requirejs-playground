// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    // baseUrl: 'lib',
    paths: {
        jquery: 'https://code.jquery.com/jquery-3.6.1.min'
    }
});

requirejs(["math/addition", "jquery"], function(addition, MyjQuery) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "math/addition".
    MyjQuery(document.body).append(`<b>1 + 2 = ${addition(1, 2)}</b>`);
});

