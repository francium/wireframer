var isDebugging = false;
var isStarted = true;

var getIsStarted = function()
{
    return isStarted;
}

var toggleDebug = function()
{
    isDebugging = isDebugging ? false : true;
    console.log("debugging: ", isDebugging);
}

var startStop = function()
{
    isStarted = isStarted ? false : true;
    if (isDebugging) console.log("started: ", isStarted);
}
