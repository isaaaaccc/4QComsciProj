if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)

for(var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)

}



var addToCartButtons = document.getElementsByClassName('shopbtn')
for(var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

}

function removeCartItem(event, i){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shoptitle')[0].innerText
    var imgsrc = shopItem.getElementsByClassName('shopimg')[0].src
    localStorage.setItem(title, imgsrc)
}

function addItemToCart (){
for(a = 0; a < localStorage.length; a++){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cartitem')
    var cartItems = document.getElementsByClassName('cartitems')[0]
    var nthItem = localStorage.key(a)
    var cartRowContents = `
    <image src="${localStorage.getItem(nthItem)}">
                    <div class="details">
                        <p>${nthItem}</p>
                    </div>
                    <div class="cancel">
                        <button class="btn btn-danger">Remove</button>
                    </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}
}

window.onload = function(){
    addItemToCart();
}

function remall() {
    localStorage.clear()
    location.reload()
}
