export interface SyncOperation {
  userId: string;
  data: any;
  type: 'RECIPES' | 'PROFILE' | 'SETTINGS';
  timestamp: number;
}

export interface SyncService {
  addToQueue: (operation: SyncOperation) => Promise<void>;
  processQueue: () => Promise<void>;
}
