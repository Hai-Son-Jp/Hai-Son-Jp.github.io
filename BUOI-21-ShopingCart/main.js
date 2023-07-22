var products = [
    {
        id: 1,
        name: 'laptop Asus',
        description: 'máy tinh asus',
        price: 20,
    },
    {
        id: 2,
        name: 'laptop Acer',
        description: 'máy tinh acer',
        price: 19,
    },
    {
        id: 3,
        name: 'laptop Dell',
        description: 'máy tinh dell',
        price: 25,
    },
    {
        id: 4,
        name: 'laptop logitech',
        description: 'máy tinh logitech',
        price: 22,
    },
];
// Mã giảm giá (promo code)
var promoCode = '123456';

function renderUI() {
    let html = '';
    if (products.length === 0) {
        html = ' Chưa có sản phẩm nào trong giỏ hàng';
    } else {
        for (let i = 0; i < products.length; i++) {
            html += /*html*/ `
            <li class="row">
            <div class="col left">
                <div class="thumbnail">
                    <a href="#"><img src="https://via.placeholder.com/200x150" alt="" /></a>
                </div>
                <div class="detail">
                    <div class="name"><a href="#">${products[i].name}</a></div>
                    <div class="description">${products[i].description}</div>
                    <div class="price">$${products[i].price}</div>
                    <div class="total-price" id="price_${products[i].id}"></div>
                </div>
            </div>
            <div class="col right">
                <div class="quantity">
                    <input
                    type="number"
                    onkeyup="handleOnChangeQuantity(${products[i].id}, ${products[i].price})"
                    class="product-quantity"
                    id="products_${products[i].id}" 
                    step="1" value="1" 
                    />
                </div>
                <div class="remove">
                    <span class="close" onclick="handleRemoveItem(${products[i].id})" ><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
        </li>`;
        }
    }
    document.getElementById('products').innerHTML = html;
}
renderUI();

// Hàm tính tổng tiền các sản phẩm và cập nhật lại các giá trị trong phần summary
const productsContainer = document.getElementById('products');
function updateSummary() {
    const productItems = productsContainer.children;
    let subtotal = 0;
    let vat = 0;
    let discount = 0;
    let total = 0;
    for (let i = 0; i < productItems.length; i++) {
        const itemPrice = parseFloat(productItems[i].querySelector('.price').textContent.replace('$', ''));
        const ItemQuantity = parseFloat(productItems[i].querySelector('.product-quantity').value);
        subtotal += itemPrice * ItemQuantity;
    }

    // Tính VAT và cộng vào tổng giá trị
    vat = subtotal * 0.1;
    // Tính tổng tiền và cập nhật giá trị trong phần summary
    total = subtotal + vat;
    document.getElementById('subtotal_value').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('vat_value').textContent = `$${vat.toFixed(2)}`;
    document.getElementById('total_value').textContent = `$${total.toFixed(2)}`;
}
function handleOnChangeQuantity(id, price) {
    let quantity = document.getElementById('products_' + id).value;
    if (quantity <= 0) {
        document.getElementById('price_' + id).innerHTML = 'Vui lòng nhập số lượng hợp lệ';
        return;
    } else {
        let newPrice = quantity * price;
        document.getElementById('price_' + id).innerHTML = '$' + newPrice;
    }
    updateSummary();
}
updateSummary();

// Hàm xử lý việc áp dụng mã giảm giá
function applyPromoCode() {
    const inputPromoCode = document.getElementById('promo-code').value;
    const discountElement = document.querySelector('.discount');
    // Kiểm tra nếu mã giảm giá nhập vào đúng
    if (inputPromoCode === promoCode) {
        const subtotalValue = parseFloat(document.getElementById('subtotal_value').textContent.replace('$', ''));
        const discountValue = subtotalValue * 0.05;
        document.querySelector('.discount span').textContent = `-$${discountValue.toFixed(2)}`;
        discountElement.classList.remove('hide');
    } else {
        discountElement.classList.add('hide');
        // Nếu mã giảm giá nhập vào không đúng, hiển thị thông báo lỗi
        const promoCodeErrorMessage = 'Mã không đúng hoặc đã hết hạn';
        const promoCodeErrorElement = document.createElement('span');
        promoCodeErrorElement.classList.add('error-message');
        promoCodeErrorElement.textContent = promoCodeErrorMessage;
        const promoCodeContainer = document.querySelector('.promotion');
        promoCodeContainer.appendChild(promoCodeErrorElement);
        // Xóa thông báo lỗi sau 3 giây
        setTimeout(() => {
            promoCodeErrorElement.remove();
        }, 3000);
    }
    updateSummary();
}

//Nút remove
/* document.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-times')) {
        const productItem = event.target.closest('li.row');
        const productId = parseInt(productItem.querySelector('.product-quantity').id.replace('products_', ''));
        products = products.filter((product) => product.id !== productId);
        productItem.remove();
        updateSummary();
    }
});
*/
function handleRemoveItem(itemId) {
    // Dùng filter
    products = products.filter((product) => product.id !== itemId);
    // Dùng vòng lập for
    /* 
     for (let i = 0; i < products.length; i++) {
        if (products[i].id === itemId) {
            products.splice(i, 1);
        }
    }
    */

    renderUI();
    updateSummary();
}
