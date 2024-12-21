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

      for (const region of data) {
        setLoadedRegions((prev) => [...prev, region]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      setRegions(data);
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
