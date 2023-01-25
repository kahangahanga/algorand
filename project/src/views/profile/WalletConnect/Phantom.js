const getProvider = () => {
  if ("solana" in window) {
    // @ts-ignore
    const provider = window.solana;
    if (provider.isPhantom) return provider;
  }
};