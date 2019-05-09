window.addEventListener('DOMContentLoaded', function(){


    let colorContainer = document.getElementById('fontColor');
    let color='';
    colorContainer.addEventListener('change', function(){
        color =colorContainer.value;
        console.log('Renk secildi:'+color)
    });

    document.getElementById('btnChange').addEventListener('click',function(){
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{todo:"changeColor", clickedColor:color})
        })
    })



})




