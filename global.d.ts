declare global {
    interface Window {
      google?: {
        accounts: {
          id: {
            initialize: (config: { client_id: string; callback: (response: any) => void }) => void;
            prompt: (config?: { prompt_parent_id?: string }) => void;
          };
        };
      };
    }
  }
  
  export {};