// @ts-check
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    viewport: null, // biarkan Playwright gunakan ukuran layar OS
    launchOptions: {
      args: ['--start-maximized'],
    },
    trace: 'on-first-retry',

  },

  projects: [
    {
      name: 'chromium',
      use: {
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'firefox',
      use: {
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'webkit',
      use: {
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
  ],
})
