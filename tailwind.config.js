/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': 'var(--color-primary-light)',
        'primary-light-hover': 'var(--color-primary-light-hover)',
        'secondary-light': 'var(--color-secondary-light)',
        'accent-light': 'var(--color-accent-light)',
        'background-light': 'var(--color-background-light)',
        'surface-light': 'var(--color-surface-light)',
        'textColor-light': 'var(--color-text-light)',
        
        'primary-dark': 'var(--color-primary-dark)',
        'primary-dark-hover': 'var(--color-primary-dark-hover)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'accent-dark': 'var(--color-accent-dark)',
        'background-dark': 'var(--color-background-dark)',
        'surface-dark': 'var(--color-surface-dark)',
        'textColor-dark': 'var(--color-text-dark)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.textColor-light'),
            a: {
              color: theme('colors.primary-light'),
              '&:hover': {
                color: theme('colors.primary-light-hover'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.textColor-light'),
            },
            strong: {
              color: theme('colors.textColor-light'),
            },
            code: {
              color: theme('colors.secondary-light'),
            },
            blockquote: {
              color: theme('colors.textColor-light'),
              borderLeftColor: theme('colors.primary-light'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.textColor-dark'),
            a: {
              color: theme('colors.primary-dark'),
              '&:hover': {
                color: theme('colors.primary-dark-hover'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.textColor-dark'),
            },
            strong: {
              color: theme('colors.textColor-dark'),
            },
            code: {
              color: theme('colors.secondary-dark'),
            },
            blockquote: {
              color: theme('colors.textColor-dark'),
              borderLeftColor: theme('colors.primary-dark'),
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-up': 'slideInUp 0.5s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
