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

// Hàm kiểm tra một chuỗi có chứa từ khóa tìm kiếm hay không (hỗ trợ tiếng Việt không dấu)
export const containsSearchQuery = (text: string, query: string): boolean => {
  // Chuẩn hóa cả text và query
  const normalizedText = normalizeSearchString(text);
  const normalizedQuery = normalizeSearchString(query);

  // Tách query thành các từ riêng lẻ
  const queryWords = normalizedQuery
    .split(/\s+/)
    .filter((word) => word.length > 0);

  // Kiểm tra xem text có chứa tất cả các từ trong query không
  // Hỗ trợ cả dạng có dấu và không dấu
  return queryWords.every((word) => {
    // Kiểm tra cả dạng có dấu và không dấu
    return (
      normalizedText.includes(word) || // Kiểm tra dạng không dấu
      text.toLowerCase().includes(word) // Kiểm tra dạng có dấu
    );
  });
};
