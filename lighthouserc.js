module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
      numberOfRuns: 1,
      settings: {
        emulatedFormFactor: 'Desktop',
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
