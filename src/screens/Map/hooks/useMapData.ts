import { useState, useEffect } from 'react';
import { useToast } from '../../../hooks/useToast';
import { Region } from '../../../types';
import { RegionService } from '../../../services/regionService';

export const useMapData = () => {
  const { showToast } = useToast();
  const [regions, setRegions] = useState<Region[]>([]);
  const [loadedRegions, setLoadedRegions] = useState<Region[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadRegions = async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      setLoadedRegions([]);

      if (forceRefresh) {
        await RegionService.clearRegionsCache();
      }

      const data = await RegionService.getAllRegions();

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

      for (const region of validRegions) {
        setLoadedRegions((prev) => {
          if (prev.some((r) => r.id === region.id)) {
            return prev;
          }
          return [...prev, region];
        });
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      setRegions(validRegions);
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
  };
};
