import { Product } from '../app/shared/interfaces/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Yến tinh (100 gram)',
    slug: 'yen-tinh-loai1-100',
    price: 3200000,
    compareAtPrice: null,
    images: ['assets/images/products/1/yen-tinh-100.jpg'],
    badges: ['hot'],
    rating: 5,
    reviews: 0,
    availability: 'Còn hàng',
    features: [
      { name: 'Khối lượng', value: '100 gram' },
      { name: 'Số lượng tổ', value: '10 tổ - 11 tổ' },
      { name: 'Tặng đường tinh khiết', value: '100 gram' },
    ],
    options: [],
    description: "Tổ yến rút lông là mặt hàng cao cấp nhất và được làm theo tiêu chuẩn nghiêm ngặt về an toàn vệ sinh thực phẩm, để đảm bảo vị thuần khiết cũng như chất bổ dưỡng ban đầu của tổ yến. Được làm ra từ những tổ yến thô thượng hạng, ít lông. Vì để rút lông được tổ yến đòi hỏi tổ yến nguyên liệu phải là loại tốt nhất Ít hơn"
  },
  {
    id: 2,
    name: 'Yến tinh (50 gram)',
    slug: 'yen-tinh-loai1-50',
    price: 1700000,
    compareAtPrice: 1800000,
    images: ['assets/images/products/2/yen-tinh-50.jpg', 'assets/images/products/2/yen-tinh-50-1.jpg'],
    badges: ['sale'],
    rating: 3,
    reviews: 0,
    availability: 'Còn hàng',
    features: [
      { name: 'Khối lượng', value: '50 gram' },
      { name: 'Số lượng tổ', value: '5 tổ - 6 tổ' },
      { name: 'Tặng đường tinh khiết', value: '100 gram' },
    ],
    options: [],
    description: "Tổ yến rút lông là mặt hàng cao cấp nhất và được làm theo tiêu chuẩn nghiêm ngặt về an toàn vệ sinh thực phẩm, để đảm bảo vị thuần khiết cũng như chất bổ dưỡng ban đầu của tổ yến. Được làm ra từ những tổ yến thô thượng hạng, ít lông. Vì để rút lông được tổ yến đòi hỏi tổ yến nguyên liệu phải là loại tốt nhất Ít hơn"
  },
  {
    id: 3,
    name: 'Yến thô (100 gram)',
    slug: 'yen-tho-loai1-100',
    price: 2600000,
    compareAtPrice: null,
    images: ['assets/images/products/3/yen-tho-100.jpg'],
    badges: [],
    rating: 4,
    reviews: 0,
    availability: 'Còn hàng',
    features: [
      { name: 'Khối lượng', value: '100 gram' },
      { name: 'Số lượng tổ', value: '10 tổ - 11 tổ' },
      { name: 'Tặng đường tinh khiết', value: '100 gram' },
    ],
    options: [],
    description: "Là tổ yến nguyên thủy, còn lông, tùy thuộc vào trọng lượng, độ sạch để phân loại 1,2. Sau khi thu hoạch từ nhà yến của công ty, chúng tôi phân loại và lựa chọn ra những tổ yến loại 1 là những tổ yến to, dày, ít lông, trung bình khoảng 10 tổ/ 100 gram. Ít hơn"
  },
  {
    id: 4,
    name: 'Yến thô (50 gram)',
    slug: 'yen-tho-loai1-50',
    price: 1300000,
    compareAtPrice: 1500000,
    images: ['assets/images/products/4/yen-tho-50.jpg'],
    badges: ['sale'],
    rating: 3,
    reviews: 0,
    availability: 'Còn hàng',
    features: [
      { name: 'Khối lượng', value: '50 gram' },
      { name: 'Số lượng tổ', value: '5 tổ - 6 tổ' },
      { name: 'Tặng đường tinh khiết', value: '100 gram' },
    ],
    options: [],
    description: "Tổ yến thô loại 1 Là tổ yến nguyên thủy, còn lông, tùy thuộc vào trọng lượng, độ sạch để phân loại 1,2. Sau khi thu hoạch từ nhà yến của công ty, chúng tôi phân loại và lựa chọn ra những tổ yến loại 1 là những tổ yến to, dày, ít lông, trung bình khoảng 05 tổ/ 50 gram. Ít hơn"
  },
];
