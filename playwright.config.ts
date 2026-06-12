import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    baseURL: "http://127.0.0.1:4321",
    trace: "retain-on-failure"
  },
  webServer: {
    command: "cmd /d /s /c npm.cmd run dev -- --port 4321",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: true,
    timeout: 60000
  },
  projects: [
    {
      name: "mobile",
      use: { ...devices["Pixel 7"] }
    },
    {
      name: "desktop",
      use: { viewport: { width: 1366, height: 768 } }
    }
  ]
});
