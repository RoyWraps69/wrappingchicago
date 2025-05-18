
export interface GenerateImageParams {
  prompt: string;
  size?: string;
}

export interface ImageGenerationResult {
  url?: string;
  error?: string;
  status?: string;
}

export interface CreateImageOptions {
  prompt: string;
  size?: string;
  n?: number;
}

export interface CreateDesignOptions {
  prompt: string;
  template?: string;
}

export interface OpenImageEditorOptions {
  imageUrl?: string;
  initialTemplate?: string;
}

export interface CCEverywhereOptions {
  clientId: string;
  appName?: string;
  appVersion?: string;
  onError?: (error: any) => void;
  onReady?: () => void;
}
