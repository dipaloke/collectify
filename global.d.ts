declare global {
    interface Window {
      ATL_JQ_PAGE_PROPS?: {
        triggerFunction: (showCollectorDialog: () => void) => void;
      };
    }
  }

  export {};
