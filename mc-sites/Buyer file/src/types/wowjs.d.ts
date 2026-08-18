declare module 'wowjs' {
  interface WowOptions {
    live?: boolean;
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
  }

  class WowInstance {
    constructor(options?: WowOptions);
    init(): void;
  }

  interface WowModule {
    WOW: typeof WowInstance;
  }

  const wowModule: WowModule;
  export default wowModule;
}
