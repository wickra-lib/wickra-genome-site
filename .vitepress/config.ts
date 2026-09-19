import { defineConfig } from 'vitepress'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

// JSON-LD structured data (Organization + SoftwareApplication) so search
// engines and LLM crawlers can resolve the product's entity, ownership, and
// where it is published. Emitted once in the document <head> below.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://genome.wickra.org/#organization',
      name: 'Wickra',
      url: 'https://genome.wickra.org/',
      logo: 'https://genome.wickra.org/wickra-mark.svg',
      sameAs: [
        'https://github.com/wickra-lib/wickra-genome',
        'https://github.com/wickra-lib/wickra',
        'https://wickra.org/',
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://genome.wickra.org/#software',
      name: 'Wickra Genome',
      url: 'https://genome.wickra.org/',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Windows, macOS, Linux, WebAssembly',
      programmingLanguage: ['Rust', 'Python', 'JavaScript', 'WebAssembly', 'C', 'C++', 'C#', 'Go', 'Java', 'R'],
      description:
        'A vector database of the whole market — every asset as a live feature vector over the streaming indicators, with similarity search, clustering and anomaly detection over microstructure DNA, in ten languages. Built on the Wickra core.',
      license: 'https://github.com/wickra-lib/wickra-genome#license',
      publisher: { '@id': 'https://genome.wickra.org/#organization' },
    },
  ],
}

export default defineConfig({
  title: 'Wickra Genome',
  description:
    'A vector database of the whole market — every asset as a live feature vector over the streaming indicators, with similarity search, clustering and anomaly detection over microstructure DNA, in ten languages. Built on the Wickra core.',
  lang: 'en-US',
  cleanUrls: true,

  // Served at the domain root (genome.wickra.org via Cloudflare Pages).
  base: '/',

  sitemap: { hostname: 'https://genome.wickra.org' },

  // README.md is repo documentation, not a site page — keep it out of the build.
  srcExclude: ['README.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/wickra-mark.svg' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Wickra Genome — a vector database of the whole market' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Every asset as a feature vector; find assets behaving alike, cluster regimes, flag anomalies, in ten languages. Byte-identical across every binding.',
      },
    ],
    ['meta', { property: 'og:image', content: 'https://genome.wickra.org/og-banner.webp' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://genome.wickra.org/og-banner.webp' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)],
  ],

  transformPageData(pageData) {
    const path = pageData.relativePath.replace(/(?:index)?\.md$/, '')
    const canonical = `https://genome.wickra.org/${path}`
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:url', content: canonical }],
    )
  },

  themeConfig: {
    siteTitle: 'Wickra Genome',
    logo: { src: '/wickra-mark.svg', alt: 'Wickra Genome' },
    logoLink: 'https://wickra.org/',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: '/demo' },
      { text: 'Live', link: 'https://live.wickra.org' },
      { text: 'Benchmarks', link: '/benchmarks' },
      {
        text: 'API',
        items: [
          { text: 'Rust', link: '/api/rust' },
          { text: 'Python', link: '/api/python' },
          { text: 'Node', link: '/api/node' },
          { text: 'WASM', link: '/api/wasm' },
          { text: 'C', link: '/api/c' },
          { text: 'C#', link: '/api/csharp' },
          { text: 'Go', link: '/api/go' },
          { text: 'Java', link: '/api/java' },
          { text: 'R', link: '/api/r' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/wickra-lib/wickra-genome' },
      {
        text: 'Links',
        items: [
          { text: 'crates.io', link: 'https://crates.io/crates/wickra-genome' },
          { text: 'PyPI', link: 'https://pypi.org/project/wickra-genome/' },
          { text: 'npm', link: 'https://www.npmjs.com/package/wickra-genome' },
          { text: 'NuGet', link: 'https://www.nuget.org/packages/Wickra.Genome' },
          { text: 'Maven Central', link: 'https://central.sonatype.com/artifact/org.wickra/wickra-genome' },
          { text: 'Go module', link: 'https://pkg.go.dev/github.com/wickra-lib/wickra-genome-go' },
          { text: 'r-universe', link: 'https://wickra-lib.r-universe.dev' },
        ],
      },
      {
        text: 'v0.1.2',
        items: [
          { text: 'Release notes', link: 'https://github.com/wickra-lib/wickra-genome/releases' },
          { text: 'Changelog', link: 'https://github.com/wickra-lib/wickra-genome/blob/main/CHANGELOG.md' },
          { text: 'docs.rs', link: 'https://docs.rs/wickra-genome/latest/wickra_genome/' },
        ],
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Core',
            items: [
              { text: 'Wickra', link: 'https://wickra.org' },
              { text: 'Docs', link: 'https://docs.wickra.org' },
              { text: 'Live demo', link: 'https://live.wickra.org' },
            ],
          },
          {
            text: 'Data',
            items: [
              { text: 'Exchange', link: 'https://exchange.wickra.org' },
              { text: 'Synth', link: 'https://synth.wickra.org' },
              { text: 'Time Machine', link: 'https://timemachine.wickra.org' },
              { text: 'Genome', link: 'https://genome.wickra.org' },
              { text: 'Feature Store', link: 'https://feature-store.wickra.org' },
            ],
          },
          {
            text: 'Research',
            items: [
              { text: 'Backtest', link: 'https://backtest.wickra.org' },
              { text: 'Screener', link: 'https://screener.wickra.org' },
              { text: 'Darwin', link: 'https://darwin.wickra.org' },
              { text: 'Gym', link: 'https://gym.wickra.org' },
              { text: 'Impact', link: 'https://impact.wickra.org' },
            ],
          },
          {
            text: 'Trust',
            items: [
              { text: 'Verify', link: 'https://verify.wickra.org' },
              { text: 'Proof', link: 'https://proof.wickra.org' },
              { text: 'ZK', link: 'https://zk.wickra.org' },
              { text: 'Strategy-CI', link: 'https://strategy-ci.wickra.org' },
              { text: 'Benchmark', link: 'https://benchmark.wickra.org' },
            ],
          },
          {
            text: 'Surface',
            items: [
              { text: 'Terminal', link: 'https://terminal.wickra.org' },
              { text: 'X-Ray', link: 'https://xray.wickra.org' },
              { text: 'Radar', link: 'https://radar.wickra.org' },
              { text: 'Copilot', link: 'https://copilot.wickra.org' },
              { text: 'Shazam', link: 'https://shazam.wickra.org' },
            ],
          },
          {
            text: 'Edge',
            items: [
              { text: 'Compile', link: 'https://compile.wickra.org' },
              { text: 'Embed', link: 'https://embed.wickra.org' },
              { text: 'Pico', link: 'https://pico.wickra.org' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/api/': [
        {
          text: 'Bindings',
          items: [
            { text: 'Rust', link: '/api/rust' },
            { text: 'Python', link: '/api/python' },
            { text: 'Node', link: '/api/node' },
            { text: 'WASM', link: '/api/wasm' },
            { text: 'C', link: '/api/c' },
            { text: 'C#', link: '/api/csharp' },
            { text: 'Go', link: '/api/go' },
            { text: 'Java', link: '/api/java' },
            { text: 'R', link: '/api/r' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/wickra-lib/wickra-genome' }],

    search: { provider: 'local' },

    outline: { level: [2, 3], label: 'On this page' },

    lastUpdated: { text: 'Updated', formatOptions: { dateStyle: 'medium' } },
  },

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: false,
  },

  vite: {
    // wickra-wasm is a wasm-pack `--target bundler` build: its JS glue does
    // `import * as wasm from './wickra_wasm_bg.wasm'` and expects the bundler
    // to instantiate the module and expose its exports. vite-plugin-wasm does
    // exactly that, and vite-plugin-top-level-await handles the top-level await
    // the wasm init emits.
    plugins: [wasm(), topLevelAwait()],
    optimizeDeps: {
      // esbuild's dep pre-bundling can't follow the .wasm ESM import, so keep
      // wickra-wasm out of it and let vite-plugin-wasm handle it on demand.
      exclude: ['wickra-wasm'],
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
})
