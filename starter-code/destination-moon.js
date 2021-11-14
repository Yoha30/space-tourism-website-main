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
