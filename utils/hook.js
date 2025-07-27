import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.afterEach(async ({ page }, testInfo) => {
  // Ambil nama file, misal: "tests/Login.spec.js"
  const fileName = path.basename(testInfo.file); // hasil: "Login.spec.js"
  
  // Ekstrak nama fitur dari nama file
  const featureName = fileName.replace('.spec.js', ''); // hasil: "Login"

  // Buat path folder berdasarkan nama fitur
  const screenshotDir = path.join('screenshots', featureName);

  // Pastikan folder ada
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  // Simpan screenshot
  const safeTitle = testInfo.title.replace(/\s+/g, '-');
  const screenshotPath = path.join(screenshotDir, `${safeTitle}.png`);
  
  await page.screenshot({
    path: screenshotPath,
    fullPage: true,
  });

  await page.close();
});
