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
 function marsMenu () {
    document.getElementById('mars-section').classList.remove('hidden');
    document.getElementById('moon-section').classList.add('hidden');
    document.getElementById('europa-section').classList.add('hidden');
     document.getElementById('titan-section').classList.add('hidden');
 }
 function moonMenu() {
    document.getElementById('moon-section').classList.remove('hidden');
    document.getElementById('mars-section').classList.add('hidden');
    document.getElementById('europa-section').classList.add('hidden');
     document.getElementById('titan-section').classList.add('hidden');
 }
document.querySelector('#moon').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="4"]').classList.remove('hidden');
    document.querySelector('#moon').classList.add('text-gray-400');
});
document.querySelector('#moon').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="4"]').classList.add('hidden');
    document.querySelector('#moon').classList.remove('text-gray-400');
});
document.querySelector('#europa').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="6"]').classList.remove('hidden');
    document.querySelector('#europa').classList.add('text-gray-400');
});
document.querySelector('#europa').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="6"]').classList.add('hidden');
    document.querySelector('#europa').classList.remove('text-gray-400');
});
document.querySelector('#titan').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="7"]').classList.remove('hidden');
    document.querySelector('#titan').classList.add('text-gray-400');
});
document.querySelector('#titan').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="7"]').classList.add('hidden');
    document.querySelector('#titan').classList.remove('text-gray-400');
});

 function europaMenu() {
    document.getElementById('europa-section').classList.remove('hidden');
    document.getElementById('moon-section').classList.add('hidden');
    document.getElementById('mars-section').classList.add('hidden');
     document.getElementById('titan-section').classList.add('hidden');
 }
document.querySelector('#moon-europa-section').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="8"]').classList.remove('hidden');
    document.querySelector('#moon-europa-section').classList.add('text-gray-400');
});
document.querySelector('#moon-europa-section').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="8"]').classList.add('hidden');
    document.querySelector('#moon-europa-section').classList.remove('text-gray-400');
});
document.querySelector('#mars-europa-section').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="9"]').classList.remove('hidden');
    document.querySelector('#mars-europa-section').classList.add('text-gray-400');
});
document.querySelector('#mars-europa-section').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="9"]').classList.add('hidden');
    document.querySelector('#mars-europa-section').classList.remove('text-gray-400');
});
document.querySelector('#titan-europa-section').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="10"]').classList.remove('hidden');
    document.querySelector('#titan-europa-section').classList.add('text-gray-400');
});
document.querySelector('#titan-europa-section').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="10"]').classList.add('hidden');
    document.querySelector('#titan-europa-section').classList.remove('text-gray-400');
});
function titanMenu (){
    document.getElementById('titan-section').classList.remove('hidden');
    document.getElementById('europa-section').classList.add('hidden');
    document.getElementById('moon-section').classList.add('hidden');
    document.getElementById('mars-section').classList.add('hidden');
}
document.querySelector('#moon-titan-section').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="12"]').classList.remove('hidden');
    document.querySelector('#moon-titan-section').classList.add('text-gray-400');
});
document.querySelector('#moon-titan-section').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="12"]').classList.add('hidden');
    document.querySelector('#moon-titan-section').classList.remove('text-gray-400');
});
document.querySelector('#mars-titan-section').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="13"]').classList.remove('hidden');
    document.querySelector('#mars-titan-section').classList.add('text-gray-400');
});
document.querySelector('#mars-titan-section').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="13"]').classList.add('hidden');
    document.querySelector('#mars-titan-sectionn').classList.remove('text-gray-400');
});
document.querySelector('#europa-titan-section').addEventListener('mouseover', function () {
    document.querySelector('[data-foo="14"]').classList.remove('hidden');
    document.querySelector('#europa-titan-section').classList.add('text-gray-400');
});
document.querySelector('#europa-titan-section').addEventListener('mouseout', function () {
    document.querySelector('[data-foo="14"]').classList.add('hidden');
    document.querySelector('#europa-titan-section').classList.remove('text-gray-400');
});