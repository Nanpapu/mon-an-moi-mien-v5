import AsyncStorage from '@react-native-async-storage/async-storage';

const SEARCH_HISTORY_KEY = '@search_history';
const MAX_HISTORY_ITEMS = 10;

export const SearchHistoryService = {
  async getSearchHistory(): Promise<string[]> {
    try {
      const history = await AsyncStorage.getItem(SEARCH_HISTORY_KEY);
      return history ? JSON.parse(history) : [];
    } catch {
      return [];
    }
  },

  async saveSearch(search: string): Promise<void> {
    try {
      const history = await this.getSearchHistory();
      const newHistory = [
        search,
        ...history.filter((item) => item !== search),
      ].slice(0, MAX_HISTORY_ITEMS);

      await AsyncStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(newHistory)
      );
    } catch (error) {
      console.error('Lỗi khi lưu lịch sử tìm kiếm:', error);
    }
  },
};
