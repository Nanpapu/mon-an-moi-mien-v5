import { useState, useEffect } from 'react';
import { useToast } from '../../../hooks/useToast';
import { Region } from '../../../types';
import { RegionService } from '../../../services/regionService';
import {
  MAP_LOAD_TIMEOUT,
  RETRY_DELAY,
  MAX_RETRIES,
} from '../../../constants/timeout';

export const useMapData = () => {
  const { showToast } = useToast();
  const [regions, setRegions] = useState<Region[]>([]);
  const [loadedRegions, setLoadedRegions] = useState<Region[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const loadRegions = async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      setLoadedRegions([]);

      if (forceRefresh) {
        await RegionService.clearRegionsCache();
      }

      // Tạo promise với timeout
      const fetchWithTimeout = async () => {
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => {
            reject(new Error('Timeout khi tải dữ liệu'));
          }, MAP_LOAD_TIMEOUT);
        });

        const dataPromise = RegionService.getAllRegions();
        const data = (await Promise.race([
          dataPromise,
          timeoutPromise,
        ])) as Region[];

        const validRegions = data.filter((region) => {
          const isValid =
            region &&
            region.id &&
            region.coordinate &&
            typeof region.coordinate.latitude === 'number' &&
            typeof region.coordinate.longitude === 'number';

          if (!isValid) {
            console.warn('Phát hiện region không hợp lệ:', region);
          }
          return isValid;
        });

        setRegions(validRegions);
        setLoadedRegions(validRegions);
        setRetryCount(0); // Reset retry count khi thành công
      };

      // Thực hiện fetch với retry
      try {
        await fetchWithTimeout();
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);

        if (retryCount < MAX_RETRIES) {
          showToast('warning', `Đang thử tải lại lần ${retryCount + 1}...`);
          setRetryCount((prev) => prev + 1);

          // Delay trước khi retry
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
          await loadRegions(forceRefresh);
        } else {
          showToast(
            'error',
            'Không thể tải dữ liệu vùng miền sau nhiều lần thử'
          );
          throw error;
        }
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
      showToast('error', 'Không thể tải dữ liệu vùng miền');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRegions();
  }, []);

  return {
    regions,
    loadedRegions,
    isLoading,
    refreshRegions: () => loadRegions(true),
    retryCount,
  };
};
