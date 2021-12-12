var testresponse;

function loadXMLDoc(planet, li) {
    document.getElementById('loading').classList.remove('hidden');
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
                document.querySelectorAll('.planets-title').forEach(function (m) {
                    m.classList.remove('text-white');
                    m.classList.remove('active');
                });
                li.classList.add('text-white');
                li.classList.add('active');
                loadingContent();
                plantsMenu(JSON.parse(xmlhttp.responseText));
            } else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            } else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "/space-tourism-website-main/starter-code/" + planet + ".json", true);
        xmlhttp.open("GET", "/"+ planet + ".json", true);
    xmlhttp.send();
}

loadXMLDoc('moon', document.getElementById('home'));

function plantsMenu(response) {
    document.getElementById('planet').innerHTML = response.planet;
    document.getElementById('planet-description').innerHTML = response.description;
    document.getElementById('planet-distance').innerHTML = response.distance;
    document.getElementById('planet-time').innerHTML = response.time;
    document.getElementById('planet-image').src = response.image;
}
var refreshIntervalId;
function loadingContent() {
    refreshIntervalId = setInterval(intervalImages, 500);
function intervalImages(){
    console.log(document.getElementById('planet-image').complete);
            clearInterval(refreshIntervalId);
    if(document.getElementById('planet-image').complete){
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('planet-image').complete = false;
    }
}
}
