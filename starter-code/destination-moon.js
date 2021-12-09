document.getElementById('list').addEventListener('mouseover',function () {
    document.getElementById('line').classList.remove('hidden');
});
document.getElementById('list').addEventListener('mouseout', function () {
    document.getElementById('line').classList.add('hidden');
});
document.getElementById('list-2').addEventListener('mouseover',function () {
    document.getElementById('line-2').classList.remove('hidden');
});
document.getElementById('list-2').addEventListener('mouseout', function () {
    document.getElementById('line-2').classList.add('hidden');
});
document.getElementById('list-3').addEventListener('mouseover',function () {
    document.getElementById('line-3').classList.remove('hidden');
});
document.getElementById('list-3').addEventListener('mouseout', function () {
    document.getElementById('line-3').classList.add('hidden');
});

document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('open-menu').classList.remove('hidden');
    document.getElementById('menu-list').classList.remove('hidden');
/*
    document.getElementById('moon-line').classList.add('hidden');
*/
});
document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('open-menu').classList.add('hidden');
    document.getElementById('menu-list').classList.add('hidden');
/*
    document.getElementById('moon-line').classList.remove('hidden');
*/
});
document.querySelector('[data-foo="2"]').addEventListener('mouseover', function () {
    document.querySelector('#europa-line').classList.remove('hidden');
    document.querySelector('[data-foo="2"]').classList.add('text-gray-400');
});
document.querySelector('[data-foo="2"]').addEventListener('mouseout', function () {
    document.querySelector('#europa-line').classList.add('hidden');
    document.querySelector('[data-foo="2"]').classList.remove('text-gray-400');
});
document.querySelector('[data-foo="1"]').addEventListener('mouseover', function () {
    document.querySelector('#mars-line').classList.remove('hidden');
    document.querySelector('[data-foo="1"]').classList.add('text-gray-400');
});
document.querySelector('[data-foo="1"]').addEventListener('mouseout', function () {
    document.querySelector('#mars-line').classList.add('hidden');
    document.querySelector('[data-foo="1"]').classList.remove('text-gray-400');
});
document.querySelector('[data-foo="3"]').addEventListener('mouseover', function () {
    document.querySelector('#titan-line').classList.remove('hidden');
    document.querySelector('[data-foo="3"]').classList.add('text-gray-400');
});
document.querySelector('[data-foo="3"]').addEventListener('mouseout', function () {
    document.querySelector('#titan-line').classList.add('hidden');
    document.querySelector('[data-foo="3"]').classList.remove('text-gray-400');
});
var testresponse;
function loadXMLDoc(planet, li) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               document.querySelectorAll('.planets-title').forEach(function (m){
                  m.classList.remove('text-white');
                  m.classList.remove('border-b-2');
               });
               li.classList.add('text-white');
               li.classList.add('border-b-2');
                plantsMenu(JSON.parse(xmlhttp.responseText));
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "/space-tourism-website-main/starter-code/"+ planet + ".json", true);
/*
    xmlhttp.open("GET", "/"+ planet + ".json", true);
*/
xmlhttp.send();
}
loadXMLDoc('moon', document.getElementById('home'));
 function plantsMenu(response) {
    document.getElementById('planet').innerHTML= response.planet;
    document.getElementById('planet-description').innerHTML= response.description;
    document.getElementById('planet-distance').innerHTML= response.distance;
    document.getElementById('planet-time').innerHTML= response.time;
    document.getElementById('planet-image').src = response.image;
 }