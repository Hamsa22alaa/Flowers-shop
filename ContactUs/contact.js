let cards  = [...document.querySelectorAll('.cards')] ;
let icon  = [...document.querySelectorAll('.ico')];


for (let index = 0; index < cards.length; index++) {
    cards[index].addEventListener('mouseover' , function(){
        icon[index].style.backgroundColor = '#E72463';
        icon[index].style.color = 'white';

    })
    cards[index].addEventListener('mouseout',function(){
        icon[index].style.backgroundColor = 'white';
        icon[index].style.color = '#E72463';

       
    })    
}