export const site = {
  name: "ShrpWare",
  url: "https://shrpware.com",
  email: "support@shrpware.com",
};

export const links = {
  waveplume: {
    mac: "/go/waveplume-mac",
    windows: "/go/waveplume-windows",
    trial: "/go/waveplume-trial",
    // Public, signed 14-day installer in the shrpware-downloads R2 bucket.
    trialDestination:
      "https://pub-6e5446faa8bf4deb83894211caf0c1a2.r2.dev/waveplume/WavePlume-Trial-1.2.5-Setup.exe",
  },
  deltatxt: {
    download: "/go/deltatxt-download",
    store: "/go/deltatxt-store",
  },
};

// Release gates prevent a deployment from promoting packages that are not ready.
export const releaseStatus = {
  waveplumeTrialReady: true,
  deltaStoreReady: true,
};

export const outboundDestinations: Record<string, string> = {
  "waveplume-mac": "https://apps.apple.com/us/app/waveplume/id6797359772",
  "waveplume-windows":
    "https://apps.microsoft.com/detail/9p6h8n3vjxbx?hl=en-US&gl=US",
  "waveplume-trial": links.waveplume.trialDestination,
  "deltatxt-download":
    "https://pub-6e5446faa8bf4deb83894211caf0c1a2.r2.dev/deltatxt/DeltaTxt-0.3.1-setup.exe",
  "deltatxt-store": "https://apps.microsoft.com/detail/9P8VKC9NHPBV",
};
