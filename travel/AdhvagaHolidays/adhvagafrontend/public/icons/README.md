# Icons Directory - Adhvaga Holidays Inc

This folder should contain all favicon and app icons for SEO and PWA functionality.

## Required Icons

### Standard Favicons
- `favicon.ico` - 16x16 multi-resolution (legacy browsers)
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG

### Apple Touch Icons
- `apple-touch-icon.png` - 180x180 (default)
- `icon-76x76.png` - iPad (non-retina)
- `icon-120x120.png` - iPhone (retina)
- `icon-144x144.png` - iPad (retina)
- `icon-152x152.png` - iPad (retina, iOS 7+)

### PWA / Android Icons
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png` - Android Chrome recommended
- `icon-384x384.png`
- `icon-512x512.png` - PWA splash screen

### Microsoft Tiles (browserconfig.xml)
- `ms-icon-70x70.png`
- `ms-icon-144x144.png`
- `ms-icon-150x150.png`
- `ms-icon-310x150.png` - Wide tile
- `ms-icon-310x310.png` - Large tile

### PWA Shortcuts
- `domestic-shortcut.png` - 192x192
- `international-shortcut.png` - 192x192
- `custom-shortcut.png` - 192x192
- `support-shortcut.png` - 192x192

## Icon Design Guidelines

1. **Primary Color**: #d97706 (Orange/Amber)
2. **Background Color**: #0a0a0a (Dark)
3. **Format**: PNG with transparent background (or brand background)
4. **Safe Zone**: Keep logo within 80% of icon area for maskable icons
5. **Style**: Simple, recognizable at small sizes

## Generating Icons

Use tools like:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [favicon.io](https://favicon.io/)
- [PWA Asset Generator](https://github.com/nicedrive/pwa-asset-generator)

## Social Media Images

Place in `/public/images/`:
- `og-image.jpg` - 1200x630 (Open Graph / Facebook)
- `twitter-card.jpg` - 1200x600 (Twitter summary_large_image)
- `logo.png` - High-res logo for schema.org

## Screenshots (for PWA)

Place in `/public/screenshots/`:
- `home-wide.png` - 1280x720 (Desktop)
- `home-narrow.png` - 720x1280 (Mobile)
