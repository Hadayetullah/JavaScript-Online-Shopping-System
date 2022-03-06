let gallery = [
    { image: 'images/female/f1.png', name: 'Lehenga', price: 800 },
    { image: 'images/female/f2.png', name: 'Peplum Top', price: 900 },
    { image: 'images/female/f3.png', name: 'Long Sleeve', price: 1000 },
    { image: 'images/female/f4.png', name: 'Jacket Gown', price: 750 },
    { image: 'images/female/f5.png', name: 'Anarkali', price: 1100 },
    { image: 'images/pants/pa1.png', name: 'Ruffle Jeans', price: 1500 },
    { image: 'images/pants/pa2.png', name: 'Harem Jeans', price: 900 },
    { image: 'images/pants/pa3.png', name: 'Washed Jeans', price: 1300 },
    { image: 'images/pants/pa4.png', name: 'Cargo Jeans', price: 950 },
    { image: 'images/pants/pa5.png', name: 'Striped Jeans', price: 1100 },
    { image: 'images/shirt/sh1.png', name: 'Cuban Collar', price: 1400 },
    { image: 'images/shirt/sh2.png', name: 'Flannel Shirt', price: 1900 },
    { image: 'images/shirt/sh3.png', name: 'Formal Shirt', price: 1130 },
    { image: 'images/shirt/sh4.png', name: 'Polo Shirts', price: 960 },
    { image: 'images/shirt/sh5.png', name: 'Denim Shirt', price: 1600 },
    { image: 'images/t-shirt/t-s1.png', name: 'Polo TShirt', price: 800 },
    { image: 'images/t-shirt/t-s2.png', name: 'Henley TShirt', price: 770 },
    { image: 'images/t-shirt/t-s3.png', name: 'Striped TShirt', price: 1150 },
    { image: 'images/t-shirt/t-s4.png', name: 'Graphic TShirt', price: 960 },
    { image: 'images/t-shirt/t-s5.png', name: 'Pocket TShirt', price: 1500 }
];

let container = document.querySelector('.container');
let leftContent = document.querySelector('.leftContent');
let rightContent = document.querySelector('.rightContent');

container.style.width = '1200px';
container.style.background = '#E1E3E8';
container.style.margin = '0 auto';
container.style.padding = '0';

// Left Side Design Starts
leftContent.style.width = '800px';
leftContent.style.float = 'left';
leftContent.style.background = '#E1E3E8';

let leftContentTop = document.createElement('div');
leftContentTop.style.paddingTop = '6px';
leftContentTop.style.marginLeft = '5px';

let searchField = document.createElement('input');
searchField.id = 'search';
searchField.style.width = '765px';
searchField.placeholder = 'Search Products...';
searchField.style.height = '35px';
searchField.style.paddingLeft = '10px';

let leftContentMiddle = document.createElement('div');
leftContentMiddle.id = 'imageField';
leftContentMiddle.style.width = '795px';
leftContentMiddle.style.height = '800px';
leftContentMiddle.style.marginTop = '5px';

leftContentTop.appendChild(searchField);
leftContent.appendChild(leftContentTop);



gallery.forEach(item => {
    let imageBody = document.createElement('div');
    imageBody.id = 'image';

    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = item.image;
    img.style.width = '100px';
    img.style.height = '108px';
    img.style.padding = '5px 0 5px 0';
    img.style.margin = '0 auto';

    let imgText = document.createElement('div');
    imgText.style.marginBottom = '5px';

    let label = document.createElement('p');
    label.textContent = item.name;
    label.style.padding = '0px';
    label.style.margin = '0px';
    label.style.textAlign = 'center';
    label.style.color = '#A6A6A6';
    label.style.fontWeight = 'normal';

    let price = document.createElement('p');
    price.textContent = 'BDT' + item.price;
    price.style.padding = '0px';
    price.style.margin = '0px';
    price.style.textAlign = 'center';
    price.style.color = '#A6A6A6';
    price.style.fontWeight = 'normal';

    imgText.appendChild(label);
    imgText.appendChild(price);

    imageBody.style.width = '103px';
    imageBody.style.float = 'left';
    imageBody.style.background = 'white';
    imageBody.style.margin = '5px';
    imageBody.style.cursor = 'pointer';

    imgDiv.appendChild(img);
    imageBody.appendChild(imgDiv)
    imageBody.appendChild(imgText);
    leftContentMiddle.appendChild(imageBody);


})

let leftContentFooter = document.createElement('div');
let leftContentFooterLeft = document.createElement('div');
let leftContentFooterRight = document.createElement('div');

let leftFooterText = document.createElement('p');
leftFooterText.textContent = 'Some Text Goes Here';
leftFooterText.style.color = 'rgb(79, 79, 79)';
leftFooterText.style.fontWeight = 'normal';

let leftFooterButtons = document.createElement('div');
leftFooterButtons.style.marginTop = '12px';

let button1 = document.createElement('button');
button1.textContent = 'Options';
button1.style.color = 'rgb(79, 79, 79)';
button1.style.marginRight = '10px';
button1.style.padding = '4px 10px';
button1.style.background = '#F2F2F2';

let button2 = document.createElement('button');
button2.textContent = 'New Sale';
button2.style.color = 'rgb(79, 79, 79)';
button2.style.marginRight = '10px';
button2.style.padding = '4px 10px';
button2.style.background = '#F2F2F2';

leftFooterButtons.appendChild(button1);
leftFooterButtons.appendChild(button2);

leftContentFooterLeft.appendChild(leftFooterText);
leftContentFooterLeft.style.width = '150px';
leftContentFooterLeft.style.float = 'left';
leftContentFooterRight.appendChild(leftFooterButtons);
leftContentFooterRight.style.width = '180px';
leftContentFooterRight.style.float = 'right';

leftContentFooter.appendChild(leftContentFooterLeft);
leftContentFooter.appendChild(leftContentFooterRight);
leftContentFooter.style.width = '786px';
leftContentFooter.style.height = '50px';
leftContentFooter.style.background = '#E1E3E8';
leftContentFooter.style.borderTop = '1px solid #A6A6A6';
leftContentFooter.style.position = 'fixed';
leftContentFooter.style.bottom = '0';

leftContent.appendChild(leftContentTop);
leftContent.appendChild(leftContentMiddle);
leftContent.appendChild(leftContentFooter);

// Left Side Design End
/*---------------------------------------------------------*/
// Right Side Design Starts

//Right Side Top
let rightTopContent = document.createElement('div');
rightTopContent.style.width = '400px';
rightTopContent.style.background = 'white';

let rightTop = document.createElement('div');
rightTop.style.width = '393px';
rightTop.style.background = 'white';
rightTop.style.marginTop = '-10px';
rightTop.style.marginLeft = '5px';
rightTop.style.borderBottom = '1px solid #E5E5E5';

let rightTopAlign = document.createElement('div');
rightTopAlign.style.height = '43px';

let rightTopSign = document.createElement('i');
rightTopSign.className = 'fas fa-user';
rightTopSign.style.color = '#4F4F4F';
rightTopSign.style.fontSize = '12px';
rightTopSign.style.float = 'left';
rightTopSign.style.margin = '10px 5px 0 15px';
rightTopSign.style.paddingTop = '6px';

let rightTopText = document.createElement('p');
rightTopText.textContent = 'Add Customer';
rightTopText.style.color = '#4F4F4F';
rightTopText.style.paddingTop = '7px';
rightTopText.style.paddingTop = '13px';

rightTopAlign.appendChild(rightTopSign);
rightTopAlign.appendChild(rightTopText);
rightTop.appendChild(rightTopAlign);
rightTopContent.appendChild(rightTop);

// Right Side Middle Starts
let rightMiddle = document.createElement('div');
rightMiddle.style.background = 'white';
rightMiddle.style.width = '400px';
rightMiddle.style.height = '800px';
rightMiddle.style.paddingTop = '1px';
rightMiddle.style.margin = '0px';

let rightMiddleUl = document.createElement('ul');
rightMiddleUl.id = 'ulTag';
rightMiddleUl.style.margin = '0px';
rightMiddle.appendChild(rightMiddleUl);
// Right Side Middle End

// Right Side Bottom Starts
let rightBottom = document.createElement('div');
rightBottom.style.position = 'fixed';
rightBottom.style.bottom = '0';
rightBottom.style.background = 'white';
rightBottom.style.width = '400px';

let rightBottomTop = document.createElement('div');
rightBottomTop.style.width = '375px';
rightBottomTop.style.marginLeft = '15px';
rightBottomTop.style.background = 'white';

let discount = document.createElement('p');
discount.textContent = 'Discount';
discount.style.color = 'rgb(79, 79, 79)';
discount.style.marginLeft = '5px';

let discountSpan = document.createElement('span');
discountSpan.textContent = 'BDT0.00';
discountSpan.style.float = 'right';
discount.appendChild(discountSpan);

let subtotal = document.createElement('p');
subtotal.textContent = 'Subtotal';
subtotal.style.color = 'rgb(79, 79, 79)';
subtotal.style.marginLeft = '5px';

let subtotalSpan = document.createElement('span');
subtotalSpan.id = 'itemPrice';
subtotalSpan.textContent = 'BDT0.00';
subtotalSpan.style.float = 'right';
subtotal.appendChild(subtotalSpan);

let tax = document.createElement('p');
tax.textContent = 'Tax(0%)';
tax.style.color = 'rgb(79, 79, 79)';
tax.style.marginLeft = '5px';

let taxSpan = document.createElement('span');
taxSpan.textContent = 'BDT0';
taxSpan.style.float = 'right';
tax.appendChild(taxSpan);

let total = document.createElement('p');
total.textContent = 'Total';
total.style.color = 'rgb(79, 79, 79)';
total.style.marginLeft = '5px';

let totalSpan = document.createElement('span');
totalSpan.id = 'itemPrice';
totalSpan.textContent = 'BDT0.00';
totalSpan.style.float = 'right';
total.appendChild(totalSpan);

rightBottomTop.appendChild(discount);
rightBottomTop.appendChild(subtotal);
rightBottomTop.appendChild(tax);
rightBottomTop.appendChild(total);

let rightBottomBtm = document.createElement('div');
rightBottomBtm.style.background = '#7872B9';
rightBottomBtm.style.width = '385px';
rightBottomBtm.style.height = '40px';
rightBottomBtm.style.marginLeft = '15px';
rightBottomBtm.style.marginBottom = '10px';
rightBottomBtm.style.borderRadius = '5px';

let rightBottomBtmText = document.createElement('h3');
rightBottomBtmText.textContent = 'PAY';
rightBottomBtmText.style.color = 'white';
rightBottomBtmText.style.paddingTop = '9px';
rightBottomBtmText.style.margin = '0 20px';

let BtmTextSpan = document.createElement('span');
BtmTextSpan.id = 'itemPrice';
BtmTextSpan.textContent = 'BDT0.00';
BtmTextSpan.style.float = 'right';

rightBottomBtmText.appendChild(BtmTextSpan);
rightBottomBtm.appendChild(rightBottomBtmText);

rightBottom.appendChild(rightBottomTop)
rightBottom.appendChild(rightBottomBtm);


rightContent.appendChild(rightTopContent);
rightContent.appendChild(rightMiddle);
rightContent.appendChild(rightBottom);
rightContent.style.background = '#E1E3E8';
rightContent.style.width = '400px';
rightContent.style.float = 'right';
rightContent.style.overFlow = 'hidden';
// Right Side Bottom end


// Event Listner
document.querySelector('#search').addEventListener('keyup', filterProduct);
document.querySelectorAll('#image').forEach(item => {
    item.addEventListener('click', addItem);
});
document.querySelector('#ulTag').addEventListener('click', removeItem);


// Functions
function filterProduct(e) {
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('#image').forEach(item => {
        if (item.lastChild.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


function addItem(e) {
    let image = e.target.parentElement.parentElement;
    gallery.forEach(item => {
        if (item.name === image.lastChild.firstChild.textContent) {
            let li = document.createElement('li');
            li.id = 'listItem';
            li.style.width = '340px';
            li.style.overflow = 'hidden';
            li.style.background = 'white';
            li.style.listStyle = 'none';
            li.style.padding = '5px 0';
            li.style.margin = '0px';
            li.style.borderBottom = '1px solid #E5E5E5';

            let liLeft = document.createElement('div');
            liLeft.style.width = '200px';
            liLeft.style.float = 'left';

            let liRight = document.createElement('div');
            liRight.style.width = '130px';
            liRight.style.float = 'right';
            liRight.style.marginRight = '10px';

            let img = document.createElement('img');
            img.src = item.image;
            img.style.height = '40px';
            img.style.width = '35px';
            img.style.padding = '5px';
            img.style.float = 'left';
            img.style.marginRight = '10px';
            img.style.border = '1px solid #E3E3E3';
            img.style.position = 'relative';

            let leftText = document.createElement('p');
            leftText.textContent = item.name;
            leftText.style.float = 'left';
            leftText.style.color = 'rgb(166, 166, 166)';
            leftText.style.marginTop = '12px';

            let rightText = document.createElement('p');
            rightText.textContent = 'BDT' + item.price + '.00';
            rightText.style.color = 'rgb(166, 166, 166)';
            rightText.style.float = 'left';

            let link = document.createElement('a');
            link.setAttribute('href', '#');
            link.innerHTML = '<i class="fas fa-trash-restore-alt"></i>';
            link.style.float = 'right';
            link.style.marginTop = '12px';
            link.style.color = 'rgb(79, 79, 79)';
            link.style.fontSize = '15px';

            let circle = document.createElement('p');
            circle.innerHTML = '<i class="fas fa-circle"></i>';
            circle.style.position = 'absolute';
            circle.style.color = '#5CB8A3';
            circle.style.margin = '-6px 0 0 38px';

            let count = document.createElement('p');
            count.textContent = '1';
            count.style.position = 'absolute';
            count.style.margin = '-5px 0px 0px 43px';
            count.style.fontSize = '12px';
            count.style.color = 'white';
            count.style.fontWeight = 'bold';

            liLeft.appendChild(img);
            liLeft.appendChild(circle);
            liLeft.appendChild(count);
            liLeft.appendChild(leftText);
            liRight.appendChild(rightText);
            liRight.appendChild(link);

            li.appendChild(liLeft);
            li.appendChild(liRight);

            let itemPrice = li.lastChild.firstChild.textContent;
            let newPrice = '';
            for (x in itemPrice) {
                if (x > 2) {
                    newPrice += itemPrice[x];
                }
            }

            document.querySelectorAll('#listItem').forEach(item => {
                let recentItem = item.firstChild.lastChild.textContent;
                let latestItem = li.firstChild.lastChild.textContent;

                let counter = item.firstChild.lastChild.previousSibling.textContent;
                counter = parseInt(counter);

                if (latestItem === recentItem) {
                    item.firstChild.lastChild.previousSibling.textContent = counter + 1;
                    li.firstChild.lastChild.textContent = '';
                    li.style.display = 'none';
                }
            });

            rightMiddleUl.appendChild(li);
            calculatePrice(newPrice);
        }
    })
}


function calculatePrice(newPrice) {
    document.querySelectorAll('#itemPrice').forEach(item => {
        let newTotalPrice;
        let totalPrice = '';
        let oldPrice = item.textContent;
        for (x in oldPrice) {
            if (x > 2) {
                totalPrice += oldPrice[x];
            }
        }
        newTotalPrice = parseInt(newPrice) + parseInt(totalPrice);
        item.textContent = 'BDT' + newTotalPrice + '.00';
    });
}


function removeItem(e) {
    if (e.target.parentElement.hasAttribute('href')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
    let itemCount = e.target.parentElement.parentElement.previousSibling.lastChild.previousSibling.textContent;
    itemCount = parseInt(itemCount);

    let itemPrice = e.target.parentElement.parentElement.firstChild.textContent;
    let newPrice = '';
    for (x in itemPrice) {
        if (x > 2) {
            newPrice += itemPrice[x];
        }
    }
    newPrice = parseInt(newPrice);

    document.querySelectorAll('#itemPrice').forEach(item => {
        let newTotalPrice;
        let totalPrice = '';
        let oldPrice = item.textContent;
        for (x in oldPrice) {
            if (x > 2) {
                totalPrice += oldPrice[x];
            }
        }
        newTotalPrice = parseInt(totalPrice) - (newPrice * itemCount);
        item.textContent = 'BDT' + newTotalPrice + '.00';
    });
}