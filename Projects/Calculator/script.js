let display = document.getElementById('display');
let button = document.querySelectorAll('.btn');

button.forEach(function(btn){
    btn.addEventListener('click',function(){
        let value = btn.dataset.value;
    })
});
