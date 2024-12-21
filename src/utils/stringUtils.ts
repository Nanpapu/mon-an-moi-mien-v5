// Hàm chuyển đổi chuỗi có dấu thành không dấu
export const removeAccents = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

// Hàm chuẩn hóa chuỗi để tìm kiếm
export const normalizeSearchString = (str: string): string => {
  return removeAccents(str.trim().toLowerCase());
};

// Hàm kiểm tra một chuỗi có chứa từ khóa tìm kiếm hay không
export const containsSearchQuery = (text: string, query: string): boolean => {
  const normalizedText = normalizeSearchString(text);
  const normalizedQuery = normalizeSearchString(query);

  // Tách query thành các từ riêng lẻ
  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter((word) => word.length > 0);

  // Kiểm tra xem text có chứa tất cả các từ trong query không
  return queryWords.every((word) => normalizedText.includes(word));
};
