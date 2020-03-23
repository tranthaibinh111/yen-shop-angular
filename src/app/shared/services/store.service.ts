import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    address = 'Chung cư Saigon Mia, Đường 9A, KDC Trung Sơn, Xã Bình Hưng, Huyện Bình Chánh, TP.Hồ Chí Minh.';
    staff1 = 'Mr. Thắng'
    email1 = 'thangtran@yenvangmiennam.com';
    phone1 = '094 280 1401';
    staff2 = 'Ms. Ngân'
    email2 = 'nganpham@yenvangmiennam.com';
    phone2 = '039 573 5218';
    hours = 'Thứ 2 - Chủ nhật 8:00am - 10:00pm';

    constructor() { }
}
