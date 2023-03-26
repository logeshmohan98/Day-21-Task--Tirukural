
function getKural() {
    var xhr = new XMLHttpRequest();
    var num = document.getElementById("kuralnum").value;
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var data = JSON.parse(this.responseText);
            var kural = data.line1 + "<br>" + data.line2;
            document.getElementById("kuraldisplay").innerHTML = kural;
        }
        
    };
    xhr.open("GET", "https://api-thirukkural.vercel.app/api?num=" + num, true);
    xhr.send();
}