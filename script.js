document.getElementById("hw1").value = getSavedValue("hw1"); 
document.getElementById("diag1").value = getSavedValue("diag1");
document.getElementById("hw2").value = getSavedValue("hw2"); 
document.getElementById("diag2").value = getSavedValue("diag2");
document.getElementById("calcBtn").click();
function saveValue(e){
    var id = e.id;  
    var val = e.value; 
    localStorage.setItem(id, val);
}

function getSavedValue (v){
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v);
}
function calc(){
    const [rh1, rw1] = document.getElementById("hw1").value.split(':');
    const diag1 = document.getElementById("diag1").value;
    const [rh2, rw2] = document.getElementById("hw2").value.split(':');
    const diag2 = document.getElementById("diag2").value;

    const h1 = rh1*Math.sqrt(diag1**2/(rh1**2+rw1**2));
    const w1 = rw1*Math.sqrt(diag1**2/(rh1**2+rw1**2));
    const h2 = rh2*Math.sqrt(diag2**2/(rh2**2+rw2**2));
    const w2 = rw2*Math.sqrt(diag2**2/(rh2**2+rw2**2));
    document.getElementById("height1inch").innerText = h1.toFixed(2);
    document.getElementById("width1inch").innerText = w1.toFixed(2);
    document.getElementById("height2inch").innerText = h2.toFixed(2);
    document.getElementById("width2inch").innerText = w2.toFixed(2);
    document.getElementById("area1inch").innerText = (w1*h1).toFixed(2);
    document.getElementById("area2inch").innerText = (w2*h2).toFixed(2);

    document.getElementById("height1mm").innerText = (h1*25.4).toFixed(2);
    document.getElementById("width1mm").innerText = (w1*25.4).toFixed(2);
    document.getElementById("height2mm").innerText = (h2*25.4).toFixed(2);
    document.getElementById("width2mm").innerText = (w2*25.4).toFixed(2);
    document.getElementById("area1cm").innerText = (w1*h1*2.54*2.54).toFixed(2);
    document.getElementById("area2cm").innerText = (w2*h2*2.54*2.54).toFixed(2);

    const scale = 0.8*window.innerHeight/(1*Math.max(h1,h2));
    const offset1 = h1 > h2 ? 0 : h2 - h1;
    const offset2 = h2 > h1 ? 0 : h1 - h2;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    c.width = Math.max(w1,w2)*scale*2 + 10 >= window.innerWidth ? window.innerWidth : Math.max(w1,w2)*scale*2 + 10;
    c.height = window.innerHeight;
    ctx.beginPath();
    ctx.lineWidth = "3s";
    ctx.strokeStyle = "red";
    ctx.rect(10, 10 + offset1*scale, w1*scale, h1*scale);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.rect(10, 10 + offset2*scale, w2*scale, h2*scale);
    ctx.stroke();
}