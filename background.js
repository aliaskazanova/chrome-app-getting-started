chrome.app.runtime.onLaunched.addListener(function(){
    chrome.app.window.create('main.html',{
        id:"main",
        'outerBounds':{'width':400,'height':500
        },
        'resizable':true
    });
});
