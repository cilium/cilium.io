module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      url: [
        'http://localhost:9000/',
        'http://localhost:9000/adopters/',
        'http://localhost:9000/blog/',
        'http://localhost:9000/#networking/',
        'http://localhost:9000/get-involved/',
      ],
      numberOfRuns: 1,
      settings: {
        emulatedFormFactor: 'website',
        throttlingMethod: 'simulate',
      },
    },

    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.7 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },

    upload: {
      target: 'temporary-public-storage',
    },
  },
};
