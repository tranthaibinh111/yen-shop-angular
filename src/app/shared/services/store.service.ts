import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    address = '26/16/16 TTN01, Tổ 77 KP7, Tân Thới Nhất, Quận 12, Hồ Chí Minh, Việt Nam';
    staff1 = 'Mr. Thắng'
    email1 = 'thangtran@yenvangmiennam.com';
    phone1 = '094 280 1401';
    staff2 = 'Ms. Ngân'
    email2 = 'nganpham@yenvangmiennam.com';
    phone2 = '039 573 5218';
    hours = 'Thư 2 - Chủ nhật 8:00am - 10:00pm';

    constructor() { }
}
