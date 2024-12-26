// Định nghĩa các style cho map
export const MAP_STYLES = {
  // Style mặc định - không có style nào
  DEFAULT: [],

  // Style đơn giản hóa
  SIMPLE: [
    // Ẩn tên đường và labels
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
    // Ẩn đường xá
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ visibility: 'off' }],
    },
    // Tăng độ dày biên giới tỉnh/thành
    {
      featureType: 'administrative.province',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#4a4a4a' }, { weight: 1.8 }, { visibility: 'on' }],
    },
    // Tăng độ dày biên giới quốc gia
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#000000' }, { weight: 2.5 }, { visibility: 'on' }],
    },
  ],
};
