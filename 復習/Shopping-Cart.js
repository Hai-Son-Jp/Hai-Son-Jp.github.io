var sanPham = [
    {
        id: 1,
        ten: 'laptop Asus',
        moTa: 'máy tính Asus',
        gia: 20,
    },
    {
        id: 2,
        ten: 'laptop Acer',
        moTa: 'máy tính Acer',
        gia: 19,
    },
    {
        id: 3,
        ten: 'laptop Dell',
        moTa: 'máy tính Dell',
        gia: 25,
    },
    {
        id: 4,
        ten: 'laptop Logitech',
        moTa: 'máy tính Logitech',
        gia: 22,
    },
];

// Mã giảm giá (promo code)
var maGiamGia = '123456';

function hienThiGiaoDien() {
    let html = '';
    if (sanPham.length === 0) {
        html = ' Chưa có sản phẩm nào trong giỏ hàng';
    } else {
        for (let i = 0; i < sanPham.length; i++) {
            html += `<li class="hang">
            <div class="cot trai">
                <div class="hinh-anh">
                    <a href="#"><img src="https://via.placeholder.com/200x150" alt="" /></a>
                </div>
                <div class="chi-tiet">
                    <div class="ten"><a href="#">${sanPham[i].ten}</a></div>
                    <div class="mo-ta">${sanPham[i].moTa}</div>
                    <div class="gia">$${sanPham[i].gia}</div>
                    <div class="thanh-tien" id="tien_${sanPham[i].id}"></div>
                </div>
            </div>
            <div class="cot phai">
                <div class="so-luong">
                    <input
                    type="number"
                    onkeyup="capNhatSoLuong(${sanPham[i].id}, ${sanPham[i].gia})"
                    class="so-luong-san-pham"
                    id="sanPham_${sanPham[i].id}" 
                    step="1" value="1" 
                    />
                </div>
                <div class="xoa">
                    <span class="dong"><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
        </li>`;
        }
    }
    document.getElementById('sanPham').innerHTML = html;
}
hienThiGiaoDien();

// Hàm tính tổng tiền các sản phẩm và cập nhật lại các giá trị trong phần tổng kết
const sanPhamContainer = document.getElementById('sanPham');
function capNhatTongTien() {
    const danhSachSanPham = sanPhamContainer.children;
    let tongTien = 0;
    let thueVAT = 0;
    let giamGia = 0;
    let tongTienSauGiamGia = 0;
    for (let i = 0; i < danhSachSanPham.length; i++) {
        const giaSanPham = parseFloat(danhSachSanPham[i].querySelector('.gia').textContent.replace('$', ''));
        const soLuongSanPham = parseFloat(danhSachSanPham[i].querySelector('.so-luong-san-pham').value);
        tongTien += giaSanPham * soLuongSanPham;
    }
    // Tính thuế VAT và cộng vào tổng giá trị
    thueVAT = tongTien * 0.1;
    // Tính tổng tiền sau khi áp dụng giảm giá
    tongTienSauGiamGia = tongTien + thueVAT - giamGia;

    document.getElementById('tongTien_value').textContent = `$${tongTien.toFixed(2)}`;
    document.getElementById('thueVAT_value').textContent = `$${thueVAT.toFixed(2)}`;
    document.getElementById('tongTienSauGiamGia_value').textContent = `$${tongTienSauGiamGia.toFixed(2)}`;
}

function capNhatSoLuong(id, gia) {
    let soLuong = document.getElementById('sanPham_' + id).value;
    if (soLuong <= 0) {
        document.getElementById('tien_' + id).innerHTML = 'Vui lòng không nhập số lượng âm';
    } else {
        let thanhTienMoi = soLuong * gia;
        document.getElementById('tien_' + id).innerHTML = '$' + thanhTienMoi;
    }
    capNhatTongTien();
}
capNhatTongTien();

// Hàm xử lý việc áp dụng mã giảm giá
function apDungMaGiamGia() {
    const nhapMaGiamGia = document.getElementById('ma-giam-gia').value;
    const phanTramGiamGia = 5; // 5% giảm giá
    const thongTinGiamGia = document.querySelector('.giam-gia');

    if (nhapMaGiamGia === maGiamGia) {
        const tongTienSauGiamGia = parseFloat(
            document.getElementById('tongTienSauGiamGia_value').textContent.replace('$', ''),
        );
        const tienGiamGia = tongTienSauGiamGia * (phanTramGiamGia / 100);
        document.querySelector('.giam-gia span').textContent = `-$${tienGiamGia.toFixed(2)}`;
        thongTinGiamGia.classList.remove('an');
    } else {
        thongTinGiamGia.classList.add('an');
        // Nếu mã giảm giá nhập vào không đúng, hiển thị thông báo lỗi
        const thongBaoLoi = 'Mã không đúng hoặc đã hết hạn';
        const thongBaoLoiElement = document.createElement('span');
        thongBaoLoiElement.classList.add('thong-bao-loi');
        thongBaoLoiElement.textContent = thongBaoLoi;
        const khungMaGiamGia = document.querySelector('.khuyen-mai');
        khungMaGiamGia.appendChild(thongBaoLoiElement);
        // Xóa thông báo lỗi sau 3 giây
        setTimeout(() => {
            thongBaoLoiElement.remove();
        }, 3000);
    }
    capNhatTongTien();
}

// Nút remove sản phẩm
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('fa-times')) {
        const sanPhamElement = event.target.closest('.hang');
        const sanPhamId = parseInt(sanPhamElement.querySelector('.so-luong-san-pham').id.replace('sanPham_', ''));
        sanPham = sanPham.filter((sanPham) => sanPham.id !== sanPhamId);
        sanPhamElement.remove();
        capNhatTongTien();
    }
});
