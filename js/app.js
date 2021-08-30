// text color
const lightBlue = document.getElementsByClassName('light-blue');
for (const h2Text of lightBlue) {
    h2Text.style.color = 'black'; 
}
// background Color
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

// consol-log button
document.getElementById('consol-log').addEventListener('click', function () {
    console.log('consol-log');
})
//border Radius
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '10px';
}
// disabled button
document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('delete-btn');
        //console.log(event.target.value);
    if (event.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
        //console.log(deleteBtn);
    }
    else {
        deleteBtn.setAttribute('disabled', true);
        //console.log('by');
    }
});


const buyNowCustomBtn = document.getElementsByClassName('buy-now-button');
for (const customButton of buyNowCustomBtn) {
    customButton.addEventListener('click',function(event){
        // console.log(event.target)
        event.target.parentNode.parentNode.style.display = "none";
    })
    }