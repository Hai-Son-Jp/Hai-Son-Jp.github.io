var danhSachCongViec = [];

function hienThiDanhSachCongViec() {
    let html = '';
    if (danhSachCongViec.length === 0) {
        html = 'Danh sách công việc trống';
    } else {
        for (let i = 0; i < danhSachCongViec.length; i++) {
            const congViec = danhSachCongViec[i];
            html += `
            <li id="congViec_${congViec.id}">
                <input type="checkbox" onclick="chuyenTrangThaiHoanThanh(${congViec.id})" ${
                congViec.trangThai ? 'checked' : ''
            }>
                <span class="tieuDe_${congViec.id} ${congViec.trangThai ? 'hoanThanh' : ''}">${congViec.tieuDe}</span>
                <button onclick="chinhSuaCongViec(${congViec.id})">Chỉnh Sửa</button>
                <button onclick="xoaCongViec(${congViec.id})">Xóa</button>
            </li>
        `;
        }
    }
    document.getElementById('danhSachCongViec').innerHTML = html;
}

//Thêm công việc
function themCongViec() {
    const nhapCongViec = document.getElementById('nhapCongViec');
    const tieuDeMoi = nhapCongViec.value.trim();
    if (tieuDeMoi === '') {
        alert('Vui lòng nhập công việc!');
        return;
    }
    const congViecMoi = {
        id: danhSachCongViec.length + 1,
        tieuDe: tieuDeMoi,
        trangThai: false,
    };
    danhSachCongViec.push(congViecMoi);
    hienThiDanhSachCongViec();
    nhapCongViec.value = '';
}

// Lắng nghe sự kiện nút Enter trong ô input
function xuLyNhanEnter(event) {
    if (event.key === 'Enter') {
        themCongViec();
    }
}
const nhapCongViec = document.getElementById('nhapCongViec');
nhapCongViec.addEventListener('keypress', xuLyNhanEnter);

//Xóa công việc
function xoaCongViec(congViecId) {
    const viTri = danhSachCongViec.findIndex((congViec) => congViec.id === congViecId);
    if (viTri === -1) {
        return;
    }
    danhSachCongViec.splice(viTri, 1);
    hienThiDanhSachCongViec();
}

//Chỉnh sửa công việc
function chinhSuaCongViec(congViecId) {
    const congViec = danhSachCongViec.find((congViec) => congViec.id === congViecId);
    if (!congViec) {
        return;
    }
    const tieuDeMoi = window.prompt('Nhập tiêu đề mới cho công việc:', congViec.tieuDe);
    if (tieuDeMoi === null) {
        return;
    }
    congViec.tieuDe = tieuDeMoi.trim();
    hienThiDanhSachCongViec();
}

//Chuyển trạng thái hoàn thành
function chuyenTrangThaiHoanThanh(congViecId) {
    const congViec = danhSachCongViec.find((congViec) => congViec.id === congViecId);
    if (!congViec) {
        return;
    }
    congViec.trangThai = !congViec.trangThai;
    const congViecElement = document.getElementById(`congViec_${congViecId}`);
    if (congViecElement) {
        const checkbox = congViecElement.querySelector('input[type="checkbox"]');
        const tieuDeSpan = congViecElement.querySelector('span');
        if (congViec.trangThai) {
            checkbox.checked = true;
            tieuDeSpan.classList.add('hoanThanh');
        } else {
            checkbox.checked = false;
            tieuDeSpan.classList.remove('hoanThanh');
        }
    }
}
