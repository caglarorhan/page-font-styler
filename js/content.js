chrome.runtime.sendMessage({todo:"showPageAction"});

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo == "changeColor"){
        //console.log(`Gelen mesajin requeste ait todo degeri:${request.todo}`)
        //console.log('mesaji geldi, renk:',request.clickedColor)
        document.getElementById('home_main_div').style.color = '#'+request.clickedColor;
    }
})
