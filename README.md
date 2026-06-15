# Salary to Hourly Calculator - Production Website

A multilingual, SEO-optimized salary to hourly wage calculator built with Astro.js. Generates static HTML for maximum performance, crawlability, and search engine visibility.

## 🌍 Features

### Multilingual Support
- **14 Languages**: English, Spanish, Portuguese, French, German, Japanese, Chinese, Indonesian, Turkish, Russian, Italian, Dutch, Polish, Korean
- **Localized URLs**: Each language has its own dedicated URL structure
- **Hreflang Implementation**: Complete language alternates for SEO
- **Auto Language Detection**: Browser language preference suggestion

### SEO Excellence
- ✅ **Static Site Generation (SSG)**: All pages pre-rendered for maximum speed
- ✅ **Crawlable**: All content visible in View Source (no JS-dependent content)
- ✅ **Structured Data**: JSON-LD schema markup (Organization, WebApplication, FAQ, Breadcrumb)
- ✅ **Sitemaps**: Main sitemap + 14 language-specific sitemaps
- ✅ **robots.txt**: Proper crawler directives
- ✅ **Canonicals**: Self-referencing canonical URLs
- ✅ **Open Graph**: Facebook, LinkedIn, and Twitter card support
- ✅ **Internal Linking**: Comprehensive navigation and breadcrumbs
- ✅ **1500+ Words**: SEO-optimized content on each page

### Calculator Features
- **Bidirectional Conversion**: Edit any field to calculate all others
- **Real-Time Calculations**: Instant results as you type
- **17 Currencies**: USD, EUR, GBP, JPY, CNY, INR, PKR, CAD, AUD, AED, SAR, BDT, NGN, BRL, MXN, KRW, CHF
- **Flexible Hours**: Customizable hours per week
- **Multiple Intervals**: Hourly, Daily, Weekly, Biweekly, Monthly, Annual, Per Minute, Per Second

### Performance
- **Lighthouse 95+**: Optimized Core Web Vitals
- **LCP < 2.5s**: Fast Largest Contentful Paint
- **CLS < 0.1**: Zero layout shifts
- **Minimal JS**: Only calculator hydrated with client:visible
- **CSS-in-JS**: Inline critical styles, lazy-loaded secondary styles
- **Optimized Images**: All images properly formatted and compressed

### Accessibility
- **WCAG AA Compliance**: Full keyboard navigation
- **ARIA Labels**: Semantic HTML and proper labels
- **Screen Reader Support**: Properly marked regions and headings
- **Color Contrast**: Meets WCAG AA standards
- **Focus Management**: Clear focus indicators
- **Reduced Motion**: Respects prefers-reduced-motion

### Developer Experience
- **TypeScript**: Full type safety
- **Astro Components**: Server-side rendering by default
- **React Islands**: Minimal hydration with client:visible
- **Tailwindless**: Pure CSS with CSS custom properties
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: CSS-based dark mode support

## 📁 Project Structure

```
src/
├── components/          # React components (islands)
│   └── Calculator.tsx  # Main calculator widget
├── config/             # Configuration files
│   ├── languages.ts    # Language definitions
│   ├── currencies.ts   # Currency configurations
│   ├── paths.ts        # URL paths and metadata
│   ├── site.ts         # Global site config
│   ├── calculator.ts   # Calculation logic
│   └── index.ts        # Config exports
├── i18n/              # Internationalization
│   └── localization.ts # All UI text translations
├── layouts/           # Astro layouts
│   └── BaseLayout.astro # Main layout
├── pages/             # Astro pages
│   ├── index.astro    # Homepage redirect
│   ├── [lang]/        # Dynamic language pages
│   │   └── salary-to-hourly-calculator.astro
│   ├── sitemaps/      # Language-specific sitemaps
│   │   └── [lang].xml.ts
│   ├── sitemap.xml.ts # Sitemap index
│   ├── robots.txt.ts  # robots.txt
│   └── 404.astro      # 404 page
├── utils/             # Utility functions
│   ├── seo.ts         # SEO helpers
│   └── sitemap.ts     # Sitemap generation
└── public/            # Static assets
    └── styles/        # CSS files
        ├── global.css # Global styles
        └── calculator.css # Calculator styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 22.12.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000 to see the site locally.

### Building

```bash
npm run build
```

This generates optimized static HTML in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## 📊 SEO Validation Checklist

- [x] All content visible in View Source (no JS rendering required)
- [x] Meta tags properly configured (title, description, robots)
- [x] Hreflang links on all pages
- [x] Self-referencing canonicals
- [x] Open Graph tags
- [x] Twitter card tags
- [x] JSON-LD structured data
- [x] Language attributes on HTML element
- [x] Proper character encoding
- [x] Mobile viewport meta tag
- [x] Sitemap.xml generated
- [x] robots.txt configured
- [x] 404 page created
- [x] Internal linking structure
- [x] Breadcrumbs on all pages
- [x] 1500+ words SEO content
- [x] 20+ FAQs per language
- [x] No duplicate content issues
- [x] All URLs crawlable
- [x] Fast page load times

## 🌐 URL Structure

### English
- `/en/salary-to-hourly-calculator/`

### Spanish
- `/es/calculadora-salario-a-hora/`

### Portuguese
- `/pt/calculadora-salario-por-hora/`

### French
- `/fr/calculateur-salaire-horaire/`

### German
- `/de/gehalt-zu-stundenlohn-rechner/`

### Japanese
- `/ja/年収から時給計算機/`

### Chinese
- `/zh/工资转时薪计算器/`

### Indonesian
- `/id/kalkulator-gaji-ke-upah-per-jam/`

### Turkish
- `/tr/maastan-saatlik-ucrete-hesaplayici/`

### Russian
- `/ru/калькулятор-зарплаты-в-почасовую-ставку/`

### Italian
- `/it/calcolatore-stipendio-orario/`

### Dutch
- `/nl/salaris-naar-uurloon-calculator/`

### Polish
- `/pl/kalkulator-pensji-na-stawke-godzinowa/`

### Korean
- `/ko/연봉-시급-계산기/`

## 🎨 Customization

### Adding New Languages

1. Add language configuration to `src/config/languages.ts`
2. Add currency mapping to `src/config/currencies.ts`
3. Add URL paths to `src/config/paths.ts`
4. Add localization strings to `src/i18n/localization.ts`
5. Pages auto-generate via dynamic routing

### Styling

All styling uses CSS custom properties. Update variables in `global.css`:

```css
:root {
  --color-primary: #3b82f6;
  --color-text: #1f2937;
  --color-bg: #ffffff;
  /* ... */
}
```

Dark mode automatically supported via media query.

### Deployment

The static output in `dist/` can be deployed to any static hosting:

- **Netlify**: Drop dist/ folder
- **Vercel**: Drop dist/ folder
- **GitHub Pages**: Push dist/ as gh-pages
- **AWS S3**: Sync dist/ to S3 bucket
- **Any web server**: Serve dist/ directory

## 📈 Performance Metrics

Target metrics:
- **Lighthouse Score**: 95+
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **First Byte**: < 600ms
- **Transfer Size**: < 50KB per page

## 🔒 Security

- ✅ No client-side data collection
- ✅ No third-party trackers (unless configured)
- ✅ HTTPS enforcement (via hosting provider)
- ✅ Security headers via hosting provider
- ✅ No form submissions required
- ✅ Static HTML only (no server vulnerabilities)

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

Contributions welcome! Please ensure all pages still build and tests pass.

## 📧 Support

For issues or questions, please open an issue in the repository.

---

**Built with Astro.js** - The web framework for content-driven websites

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
