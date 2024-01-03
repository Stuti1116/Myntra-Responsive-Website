

function display(){
    let itemsContainer=document.querySelector(".items-container");
    if(!itemsContainer){
        return;
    }
    let innerHtml='';
items.forEach(item =>{
    
    innerHtml+=`<div class="item-container">
    <img class="image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">RS ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <div class="btn" onclick="addToBag(${item.id})">
         <span class="material-symbols-outlined action-icon">
            shopping_bag
            </span> 
         ADD TO BAG</div>
    </div>`
});


itemsContainer.innerHTML=innerHtml;
}

let bagItems;
onLoad();
function onLoad(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr):[];
    display();
    displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}
function displayBagIcon(){
    let bagcount=document.querySelector(".count");
     if(bagItems.length>0){
        bagcount.style.visibility='visible';
        bagcount.innerText=bagItems.length;
     }  
     else{
         bagcount.style.visibility='hidden';
     }
}

