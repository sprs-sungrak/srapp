import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'kr.or.sungrak.srapp',
  appName: 'srapp',
  webDir: 'out',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    LiveUpdates: {
      appId: '9f2a4c6c',
      channel: 'development',
      autoUpdateMethod: 'background',
      maxVersions: 2,
    },
  },
}

export default config
