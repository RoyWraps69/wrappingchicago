
export interface GenerateImageParams {
  prompt: string;
  size?: string;
}

export interface ImageGenerationResult {
  url?: string;
  error?: string;
  status?: string;
  base64?: string; // Added base64 property
}

export interface CreateImageOptions {
  prompt: string;
  size?: string;
  n?: number;
  width?: number; // Added width property
  height?: number; // Added height property
  outputParams?: {
    outputType: string;
  };
}

export interface CreateDesignOptions {
  prompt: string;
  template?: string;
  width?: number; // Added width property
  height?: number; // Added height property
  browserWidth?: number; // Added browserWidth property
  browserHeight?: number; // Added browserHeight property
  outputParams?: {
    outputType: string;
  };
}

export interface OpenImageEditorOptions {
  imageUrl?: string;
  initialTemplate?: string;
  inputParams?: { // Added inputParams property
    prompt: string;
  };
  outputParams?: {
    outputType: string;
  };
}

export interface CCEverywhereOptions {
  clientId: string;
  appName?: string;
  appVersion?: string; // Changed to string to match the expected type
  redirectUri?: string;
  onError?: (error: any) => void;
  onReady?: () => void;
}

// Add global type declaration for CCEverywhere
declare global {
  interface Window {
    CCEverywhere: any;
    __vite_plugin_react_preamble_installed__?: boolean;
    $RefreshReg$?: any;
    $RefreshSig$?: any;
  }
}
