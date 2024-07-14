// 4 tính chất của OOP
// - Tính đóng gói (Encapsulation)
// - Tính kế thừa (Inheritance)
// - Tính đa hình (Polymorphism)
// - Tính trừu tượng (Abstraction)

// Ví dụ về class và đối tượng trong JavaScript
class Nguoi {
    constructor(ten, tuoi) {
        this.ten = ten;
        this.tuoi = tuoi;
    }

    hienthi() {
        console.log(`Xin chào, tôi là ${this.ten}, tôi ${this.tuoi} tuổi.`);
    }
    nhapThongTin(ten, tuoi) {
        this.ten = ten;
        this.tuoi = tuoi;
    }
}
let nguoi1 = new Nguoi('Hùng', 25);

nguoi1.hienthi();
nguoi1.nhapThongTin('Hồng', 24);
nguoi1.hienthi();

// Tính đóng gói (Encapsulation)
// Tính đóng gói (Encapsulation) trong lập trình hướng đối tượng (OOP) 
// là khái niệm về việc ẩn giấu thông tin chi tiết của một đối tượng và 
// chỉ cung cấp những thông tin cần thiết thông qua các phương thức công khai. 
// Điều này giúp bảo vệ dữ liệu bên trong đối tượng và ngăn chặn việc truy cập trực tiếp từ bên ngoài, 
// đảm bảo tính toàn vẹn và bảo mật của dữ liệu.
class TaiKhoanNganHang {
    constructor(soTaiKhoan, soDu) {
        this.soTaiKhoan = soTaiKhoan;
        this._soDu = soDu; // sử dụng dấu _ để biểu thị thuộc tính private
    }

    // phương thức công khai để truy cập và thay đổi số dư
    getSoDu() {
        return this._soDu;
    }

    guiTien(soTien) {
        if (soTien > 0) {
            this._soDu += soTien;
            console.log(`Bạn đã gửi ${soTien}. Số dư hiện tại là ${this._soDu}.`);
        } else {
            console.log("Số tiền phải lớn hơn 0.");
        }
    }

    rutTien(soTien) {
        if (soTien > 0 && soTien <= this._soDu) {
            this._soDu -= soTien;
            console.log(`Bạn đã rút ${soTien}. Số dư hiện tại là ${this._soDu}.`);
        } else {
            console.log("Số tiền rút không hợp lệ.");
        }
    }
}

let taiKhoan = new TaiKhoanNganHang('12345678', 1000);
console.log(taiKhoan.getSoDu());
taiKhoan.guiTien(500);
taiKhoan.rutTien(300);

// Tính kế thừa (Inheritance)
// Tính kế thừa là một trong bốn tính chất cơ bản của lập trình hướng đối tượng (OOP). 
// Kế thừa cho phép một lớp (class) con thừa hưởng các thuộc tính và phương thức của một lớp cha
// (superclass hoặc base class). Điều này giúp tạo ra một cấu trúc phân cấp và tái sử dụng mã nguồn, 
// giảm thiểu sự trùng lặp mã và cải thiện khả năng bảo trì.
class DongVat {
    constructor(loai, tuoi) {
        this.loai = loai;
        this.tuoi = tuoi;
    }

    an() {
        console.log(`${this.loai} đang ăn.`);
    }
}

// chó
class Cho extends DongVat {
    constructor(loai, tuoi,chu) {
        super(loai, tuoi);
        this.chu = chu;
    }
    sua() {
        console.log('Gâu gâu!');
    }
}

let choCon = new Cho('Chó con', 1);
choCon.an();
choCon.sua();

// Tính đa hình (Polymorphism)
// Tính đa hình là một trong bốn tính chất cơ bản của lập trình hướng đối tượng (OOP). 
// Đa hình cho phép các đối tượng thuộc các lớp khác nhau có thể được xử lý thông qua cùng một giao diện. 
// Nói cách khác, một phương thức có thể thực hiện các hành vi khác nhau dựa trên đối tượng gọi nó.
class Meo extends DongVat {
    keu() {
        console.log('Meo meo!');
    }
}

let dongVat = new DongVat('Động vật', 5);
let cho = new Cho('Chó', 3);
let meo = new Meo('Mèo', 2);

dongVat.an();
cho.an();
meo.an();

function keuDongVat(dv) {
    if (dv instanceof Cho) {
        dv.sua();
    } else if (dv instanceof Meo) {
        dv.keu();
    } else {
        console.log('Động vật không xác định.');
    }
}

keuDongVat(cho);
keuDongVat(meo);

// Tính trừu tượng (Abstraction)
// Tính trừu tượng là một trong bốn tính chất cơ bản của lập trình hướng đối tượng (OOP).
// Trừu tượng hóa là quá trình ẩn giấu các chi tiết triển khai cụ thể của một đối tượng và 
// chỉ hiển thị những thuộc tính và phương thức cần thiết cho người dùng. 
// Mục đích chính của trừu tượng là giảm sự phức tạp bằng cách tập trung vào những gì 
// đối tượng thực hiện hơn là cách nó thực hiện.

class Hinh {
    constructor(ten) {
        if (this.constructor === Hinh) {
            throw new Error('Không thể khởi tạo từ lớp trừu tượng');
        }
        this.ten = ten;
    }

    tinhDienTich() {
        throw new Error('Phương thức trừu tượng phải được ghi đè');
    }
}
// let hinh = new Hinh("tròn");
// console.log(`${ hinh.ten }}`);
class HinhChuNhat extends Hinh {
    constructor(chieuDai, chieuRong) {
        super('Hình chữ nhật');
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }

    tinhDienTich() {
        return this.chieuDai * this.chieuRong;
    }
}

class HinhTron extends Hinh {
    constructor(banKinh) {
        super('Hình tròn');
        this.banKinh = banKinh;
    }

    tinhDienTich() {
        return Math.PI * this.banKinh * this.banKinh;
    }
}

let hinhChuNhat = new HinhChuNhat(5, 3);
console.log(`${hinhChuNhat.ten} có diện tích: ${hinhChuNhat.tinhDienTich()}`);

let hinhTron = new HinhTron(4);
console.log(`${hinhTron.ten} có diện tích: ${hinhTron.tinhDienTich()}`);


