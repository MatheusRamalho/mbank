import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-300': '#FF5B4C',
                'primary-500': '#C84343',
                'primary-700': '#BC2C38',

                'secondary-300': '#0097B1',
                'secondary-500': '#007DA0',
                'secondary-700': '#006E93',

                'gray-50': '#F3F0F5',
                'gray-100': '#FBF8FC',
                'gray-200': '#EDEAEF',
                'gray-300': '#A6A6A7',
                'gray-400': '#969597',
                'gray-500': '#868587',
                'gray-600': '#767576',
                'gray-700': '#666566',
                'gray-800': '#555456',
                'gray-900': '#454446',
                'gray-950': '#232224',
                'gray-1000': '#353436',
                'gray-1050': '#161617',
            },
            backgroundImage: {
                'primary-gradient':
                    'linear-gradient(220.94deg, #FF5B4C 14.43%, #BC2C38 85.28%)',

                arrow: "url('/assets/arrow-svg')",
                entail: "url('/assets/entail.svg')",
            },
            boxShadow: {
                purple1:
                    '0px 17px 17px rgb(169 80 196 / 13%), 0px 5.125px 5.125px rgb(169 80 196 / 8%), 0px 2.12866px 2.12866px rgb(169 80 196 / 7%), 0px 0.7699px 0.7699px rgb(169 80 196 / 5%)',
                purple2:
                    '0px 17px 31px rgb(169 80 196 / 27%), 0px 5.125px 9.34559px rgb(169 80 196 / 18%), 0px 2.12866px 3.88168px rgb(169 80 196 / 14%), 0px 0.7699px 1.40393px rgb(169 80 196 / 9%)',
                purple3:
                    '0px 51px 80px rgba(169, 80, 196, 0.08), 0px 15.375px 24.1177px rgba(169, 80, 196, 0.0521271), 0px 6.38599px 10.0172px rgba(169, 80, 196, 0.04), 0px 2.30969px 3.62304px rgba(169, 80, 196, 0.0278729)',
                purple4:
                    '0px 4px 80px rgba(130, 38, 158, 0.07), 0px 1.20588px 24.1177px rgba(130, 38, 158, 0.0456112), 0px 0.500862px 10.0172px rgba(130, 38, 158, 0.035), 0px 0.181152px 3.62304px rgba(130, 38, 158, 0.0243888)',
            },
            dropShadow: {
                purple: '0px 16px 24px rgba(169, 80, 196, 0.25)',
            },
            keyframes: {
                'flip-card': {
                    '0%': {
                        transform:
                            'rotateX(-10deg) rotateY(10deg) rotate(-15deg)',
                    },
                    '40%': { transform: 'rotateX(0deg) rotateY(20deg)' },
                    '60%': { transform: 'rotateX(180deg) rotateY(20deg)' },
                    '100%': {
                        transform:
                            'rotateX(190deg) rotateY(10deg) rotate(15deg)',
                    },
                },

                'opacity-img': {
                    '0%': { opacity: '0' },
                    '20%, 50%': { opacity: '1' },
                    '70%, 100%': { opacity: '0' },
                },

                'opacity-screen1': {
                    '0%, 15%': { opacity: '1' },
                    '20%, 100%': { opacity: '0' },
                },

                'opacity-screen2': {
                    '0%, 15%': { opacity: '0' },
                    '20%, 35%': { opacity: '1' },
                    '40%, 100%': { opacity: '0' },
                },

                'opacity-screen3': {
                    '0%, 35%': { opacity: '0' },
                    '40%, 55%': { opacity: '1' },
                    '60%, 100%': { opacity: '0' },
                },

                'opacity-screen4': {
                    '0%, 55%': { opacity: '0' },
                    '60%, 75%': { opacity: '1' },
                    '80%, 100%': { opacity: '0' },
                },

                'opacity-screen5': {
                    '0%, 75%': { opacity: '0' },
                    '80%, 100%': { opacity: '1' },
                },

                'move-and-rotate': {
                    '0%': { transform: 'translate3d(0,-40px,0) rotate(0deg)' },
                    '100%': { transform: 'translate3d(0,20px,0) rotate(5deg)' },
                },

                'icon-move': {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '100%': { transform: 'translate3d(10px, -40px, 0)' },
                },

                'bg-move': {
                    '0%': { transform: 'translate3d(0, 0, 0)' },
                    '100%': { transform: 'translate3d(0, 30px, 0)' },
                },
            },
            animation: {
                image: 'opacity-img 10s ease 0s infinite',
                image2: 'opacity-img 10s ease 2s infinite',
                image3: 'opacity-img 10s ease 3s infinite',
                image5: 'opacity-img 10s ease 5s infinite',
                image7: 'opacity-img 10s ease 7s infinite',
                image8: 'opacity-img 10s ease 8s infinite',
                'move-rotate': 'move-and-rotate 3s ease infinite alternate',
                'icon-move': 'icon-move 3s ease 2.5s infinite alternate',
                'icon-move2': 'icon-move 7s ease infinite alternate',
                'icon-move3': 'icon-move 7s ease 1s infinite alternate',
                'icon-move4': 'icon-move 7s ease 2.5s infinite alternate',
                screen1: 'opacity-screen1 18s ease infinite alternate',
                screen2: 'opacity - screen2 18s ease infinite alternate',
                screen3: 'opacity - screen3 18s ease infinite alternate',
                screen4: 'opacity - screen4 18s ease infinite alternate',
                screen5: 'opacity - screen5 18s ease infinite alternate',
                'flip-card':
                    'flip-card 12s linear infinite alternate, change-card 12s linear 0s infinite alternate',
                'bg-move': 'bg-move 3s ease infinite alternate',
                'bg-move2': 'bg-move 3s ease 0s infinite alternate',
                'bg-move3': 'bg-move 3s ease 0.5s infinite alternate',
                'bg-move4': 'bg-move 3s ease 1s infinite alternate',
                'bg-move5': 'bg-move 3s ease 1.5s infinite alternate',
                'move-line-letter':
                    'move-line-letter 4s ease infinite alternate',
            },
        },
    },
    plugins: [],
}

export default config
