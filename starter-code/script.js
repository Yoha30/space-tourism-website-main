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