let toggleActivate = document.getElementById('toggle');
toggleActivate.onclick = function(){
    chrome.storage.sync.get('gotEnabled', function(storage) {
        chrome.storage.sync.set({gotEnabled: !storage.gotEnabled}, function() {
            document.querySelector(".toggle").classList.toggle('isOn');
            document.querySelector(".toggle").classList.toggle('isOff');
        });
	});
}

chrome.storage.sync.get('gotEnabled', function(storage) {

    if(storage.gotEnabled){
        document.querySelector(".toggle").classList.remove('isOff');
        document.querySelector(".toggle").classList.add('isOn');
    }
    else {
        document.querySelector(".toggle").classList.add('isOff');
        document.querySelector(".toggle").classList.remove('isOn');
    }

})