
// Type definition for the Adobe Express SDK
export interface CCEverywhereOptions {
  clientId: string;
  appName: string;
  appVersion: { major: number; minor: number };
  redirectUri: string;
  onError: (error: any) => void;
}

export interface CreateImageOptions {
  width: number;
  height: number;
  prompt: string;
  outputParams: {
    outputType: string;
  };
}

export interface OpenImageEditorOptions {
  inputParams: {
    prompt: string;
  };
  outputParams: {
    outputType: string;
  };
}

export interface CreateDesignOptions {
  width: number;
  height: number;
  browserWidth: number;
  browserHeight: number;
  prompt: string;
  outputParams: {
    outputType: string;
  };
}

export interface GenerateImageParams {
  prompt: string;
  size?: string;
}

export interface ImageGenerationResult {
  base64?: string;
}

// Add to global Window interface
declare global {
  interface Window {
    CCEverywhere: {
      isInitialized?: boolean;
      initialize: (options: CCEverywhereOptions) => Promise<any>;
    };
  }
}
