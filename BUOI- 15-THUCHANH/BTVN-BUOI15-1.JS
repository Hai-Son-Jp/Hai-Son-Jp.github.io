// Danh sách các sản phẩm có trong giỏ hàng
let productsList = [
    {
        name: 'Iphone 13 Pro Max', // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: 'Apple', // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: 'Samsung Galaxy Z Fold3',
        price: 41000000,
        brand: 'Samsung',
        count: 1,
    },
    {
        name: 'IPhone 11',
        price: 15500000,
        brand: 'Apple',
        count: 1,
    },
    {
        name: 'OPPO Find X3 Pro',
        price: 19500000,
        brand: 'OPPO',
        count: 3,
    },
];
// 1. In ra thông tin các sản phẩm trong giỏ hàng
for (let product of productsList) {
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
}

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
let total = 0;
for (let product of productsList) {
    total += product.price * product.count;
}
console.log('Tổng tiền: ' + total);

// 3. Tìm các sản phẩm của thương hiệu "Apple"
let appleProducts = productsList.filter((product) => product.brand.includes('Apple'));
console.log(appleProducts);

// 4. Tìm các sản phẩm có giá > 20000000
let expensiveProducts = productsList.filter((product) => product.price > 20000000);
console.log(expensiveProducts);

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let proProducts = productsList.filter((product) => product.name.toLowerCase().includes('pro'));
console.log(proProducts);

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = {
    name: 'Sony Xperia 1 III',
    price: 27000000,
    brand: 'Sony',
    count: 2,
};
productsList.push(newProduct);
console.log(productsList);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
productsList = productsList.filter((product) => product.brand !== 'Samsung');
console.log(productsList);

// 8. Sắp xếp giỏ hàng theo price tăng dần
productsList.sort((a, b) => a.price - b.price);
console.log(productsList);

// 9. Sắp xếp giỏ hàng theo count giảm dần
productsList.sort((a, b) => b.count - a.count);
console.log(productsList);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let randomProducts = productsList.slice(0, 2);
console.log(productsList);
