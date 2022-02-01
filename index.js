function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {


return receivesAFunction 

}


function returnsAnAnonymousFunction() {

    return () => 'This function is anomyous'
}