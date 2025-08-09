

tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            fontFamily: {
                'Outfit': ['Outfit', 'sans-serif'],
                'Ovo': ['Ovo', 'serif'],
            },
            animation: {
                'spin-slow': 'spin 6s linear infinite',
            },
            colors: {
                lightHover: '#f4e6ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F',
            }, 
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
    }
},
    darkMode: 'selector'
}