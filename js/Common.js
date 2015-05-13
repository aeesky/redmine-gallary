function KillAD() {
	alert("KillAD");
    document.getElementById('cproIframe1').style.display = 'none';
    if (window.event.srcElement.checked) {
        
        Console.log("KillAD");
    }
}

var body = document.getElementsByTagName("body")[0];
body.addEventListener("mouseup", OnMouseEvent, false);
function OnMouseEvent(e) {
    console.log(e.clientX);
}
window.onload = function () {
    HideADByID("cproIframe1");
    HideADByTag("object");
    HideADByTag("ins");
    HideADByTag("img");
    HideADByTag("iframe");
}
function HideADByID(id) {
    var ad = document.getElementById(id);
    if (ad != null) {
        HideElement(ad);
    }
}
function HideElement(element){
    element.style.display = 'none';
    console.log("Hide:" + element.tagName);
    if (element.tagName == "IFRAME") {
        element.load = function () {
            console.log("load");
            element.style.display = 'none';
        };
    }
}
function HideADByTag(tagName){
    var obj = document.getElementsByTagName(tagName);
    if(obj!=null && obj.length>0){
        HideElement(obj[0]);
    }
}
