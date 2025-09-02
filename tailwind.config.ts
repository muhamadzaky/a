const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
    	extend: {
    		spacing: {
    			'1': '0.25rem',
    			'2': '0.5rem',
    			'3': '0.75rem',
    			'4': '1rem',
    			'5': '1.25rem',
    			'6': '1.5rem',
    			'7': '1.75rem',
    			'8': '2rem',
    			'9': '2.25rem',
    			'10': '2.5rem',
    			'11': '2.75rem',
    			'12': '3rem',
    			'14': '3.5rem',
    			'16': '4rem',
    			'18': '4.5rem',
    			'20': '5rem',
    			'24': '6rem',
    			'28': '7rem',
    			'32': '8rem',
    			'36': '9rem',
    			'40': '10rem',
    			'44': '11rem',
    			'48': '12rem',
    			'52': '13rem',
    			'56': '14rem',
    			'60': '15rem',
    			'64': '16rem',
    			'72': '18rem',
    			'80': '20rem',
    			'96': '24rem',
    			'0.5': '0.125rem',
    			'1.5': '0.375rem',
    			'2.5': '0.625rem',
    			'3.5': '0.875rem'
    		},
    		typography: {
    			DEFAULT: {
    				css: {
    					'code::before': {
    						content: ''
    					},
    					'code::after': {
    						content: ''
    					}
    				}
    			},
    			quoteless: {
    				css: {
    					'blockquote p:first-of-type::before': {
    						content: 'none'
    					},
    					'blockquote p:first-of-type::after': {
    						content: 'none'
    					}
    				}
    			}
    		},
    		fontFamily: {
    			sans: [
    				'var(--font-poppins)',
                    ...defaultTheme.fontFamily.sans
                ],
    			display: [
    				'var(--font-poppins)'
    			]
    		},
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))'
    		},
    		animation: {
    			'fade-in': 'fade-in 3s ease-in-out forwards',
    			title: 'title 3s ease-out forwards',
    			'fade-left': 'fade-left 3s ease-in-out forwards',
    			'fade-right': 'fade-right 3s ease-in-out forwards'
    		},
    		keyframes: {
    			'fade-in': {
    				'0%': {
    					opacity: '0%'
    				},
    				'75%': {
    					opacity: '0%'
    				},
    				'100%': {
    					opacity: '100%'
    				}
    			},
    			'fade-left': {
    				'0%': {
    					transform: 'translateX(100%)',
    					opacity: '0%'
    				},
    				'30%': {
    					transform: 'translateX(0%)',
    					opacity: '100%'
    				},
    				'100%': {
    					opacity: '0%'
    				}
    			},
    			'fade-right': {
    				'0%': {
    					transform: 'translateX(-100%)',
    					opacity: '0%'
    				},
    				'30%': {
    					transform: 'translateX(0%)',
    					opacity: '100%'
    				},
    				'100%': {
    					opacity: '0%'
    				}
    			},
    			title: {
    				'0%': {
    					'line-height': '0%',
    					'letter-spacing': '0.25em',
    					opacity: '0'
    				},
    				'25%': {
    					'line-height': '0%',
    					opacity: '0%'
    				},
    				'80%': {
    					opacity: '100%'
    				},
    				'100%': {
    					'line-height': '100%',
    					opacity: '100%'
    				}
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
        require("tailwindcss-animate")
    ],
};
