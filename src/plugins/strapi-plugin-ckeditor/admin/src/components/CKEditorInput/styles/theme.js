export const baseTheme = {
    font: {
        size: {
            //Mobile default font size - 16px
            // mobile: {
            //     h1: '1.802em',
            //     h2: '1.602em',
            //     h3: '1.424em',
            //     h4: '1.266em',
            //     p: '1em',
            //     small: '0.889em',
            // },
            // //Desktop default font size - 16px
            // desktop: {
            //     h1: '2.488em',
            //     h2: '2.074em',
            //     h3: '1.728em',
            //     h4: '1.44em',
            //     p: '1em',
            //     small: '0.833em',
            //     ultraSmall: '',
            // },
            h1: '2.488em',
            h2: '1.728em',
            h3: '1.44em',
            h4: '1.2em',
            p: '1em',
            small: '0.833em',
            ultraSmall: '0.694em',
        },
        weight: {
            w100: '100',
            w300: '300',
            w500: '500',
            w700: '700',
        },
    },
    containerSize: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1320px',
    },
    mq: {
        sm: '@media (min-width: 576px)',
        md: '@media (min-width: 768px)',
        lg: '@media (min-width: 992px)',
        xl: '@media (min-width: 1200px)',
        xxl: '@media (min-width: 1400px)',
    },
    navBar: {
        mobileHeight: '8rem',
        mobileWidth: '100%',
        desktopHeight: '100%',
        desktopWidth: '26.5rem',
    },
}

export const lightTheme = {
    color: {
        background: '#fff',
        background100: '#242526',
        background200: '#3A3B3C',
        background300: 'red',
        primaryText: '#333333',
        secondaryText: 'black',
        dividerPrimary: '#3c4043',
        accent2: 'hsl(219, 79%, 44%)',
        // accent: '#FFFD00',
        accent: 'rgb(33 149 243)',
        accentSecondary: '#FFFD00',
    },
}

export const darkTheme = {
    color: {
        background: '#18191A',
        background100: '#242526',
        background200: '#3A3B3C',
        background300: 'red',
        primaryText: '#E4E6EB',
        secondaryText: '#B0B3B8',
        dividerPrimary: '#3c4043',
        accent: '#3241FF',
        // accent: 'rgb(33 149 243)',
        accentSecondary: '#FFFD00',
    },
}
