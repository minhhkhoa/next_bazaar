//- viết 1 hàm tính giá tiền còn lại với đầu vào là giá tiền hiện tại và phần trăm giảm giá
export const newPrice = (price: number, discount: number) => {
  return (price * (100 - discount)) / 100
} 