
class Sach {
    constructor(tieuDe, tacGia, namXuatBan) {
        this._tieuDe = tieuDe;
        this._tacGia = tacGia;
        this._namXuatBan = namXuatBan;
    }

    nhapThongTin(tieuDe, tacGia, namXuatBan) {
        this._tieuDe = tieuDe;
        this._tacGia = tacGia;
        this._namXuatBan = namXuatBan;
    }

    hienThiThongTin() {
        console.log(`Sách : ${this._tieuDe}, tác giả: ${this._tacGia}, năm xuất bản: ${this._namXuatBan}`);
    }
}

class SachGiaoKhoa extends Sach {
    constructor(tieuDe, tacGia, namXuatBan, monHoc) {
        super(tieuDe, tacGia, namXuatBan);
        this._monHoc = monHoc;
    }

    hienThiThongTin() {
        console.log(`Sách giáo khoa: ${this._tieuDe}, tác giả: ${this._tacGia}, năm xuất bản: ${this._namXuatBan}, môn học: ${this._monHoc}`);
    }
}

class SachVanHoc extends Sach {
    constructor(tieuDe, tacGia, namXuatBan, theLoai) {
        super(tieuDe, tacGia, namXuatBan);
        this._theLoai = theLoai;
    }

    hienThiThongTin() {
        console.log(`Sách văn học: ${this._tieuDe}, tác giả: ${this._tacGia}, năm xuất bản: ${this._namXuatBan}, thể loại: ${this._theLoai}`);
    }
}

let sach0 = new Sach("Truyện hài","Nguyễn văn A",2019)
let sach1 = new SachGiaoKhoa('Toán cao cấp', 'Nguyễn Văn A', 2020, 'Toán');
let sach2 = new SachVanHoc('Truyện Kiều', 'Nguyễn Du', 1802, 'Kinh điển');

sach0.hienThiThongTin(); 
sach1.hienThiThongTin(); 
sach2.hienThiThongTin(); 

sach1.nhapThongTin('Toán cao cấp 2', 'Nguyễn Văn A', 2022);
sach1.hienThiThongTin(); 
