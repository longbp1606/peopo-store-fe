const PRIMARY_COLOR: string = '#41DAF1';
const SECONDARY_COLOR: string = '#31C3E0';

export const theme = {
    light: '',
    dark: '',
    colors: {
        primary: PRIMARY_COLOR,
        lightPrimary: 'rgba(69,218,241,0.1)',
        error: '#FF0000',
        blueGradient: 'linear-gradient(45deg, rgba(5,235,254,1) 0%, rgba(232,3,226,1) 100%)',
        greenGradient: 'linear-gradient(45deg, rgba(250,229,71,1) 0%, rgba(7,196,201,1) 100%)',
        pinkGradient: 'linear-gradient(45deg, rgba(255,7,109,1) 0%, rgba(254,173,231,1) 100%)',
        orangeGradient: 'linear-gradient(45deg, rgba(253,7,85,1) 0%, rgba(253,208,1,1) 100%)',
        border: '#BFBFBF',
        textPrimary: 'rgba(0, 0, 0, 0.85)',
        textSecondary: 'rgba(0, 0, 0, 0.45)',
        divider: 'rgba(5, 5, 5, 0.06)',
        white: '#FFF',
        black: '#000',
        shadowForm: 'rgb(34 41 47 / 10%)',
        shadowCart: 'rgba(56, 56, 56, 0.06)',
        shadowDropdown: 'rgba(0, 0, 0, 0.02)',
        shadowCartHover: 'rgba(56, 56, 56, 0.07)',
        shadowPurchased: 'rgba(51, 56, 56, 0.06)',
        shadowPurchasedHover: 'rgba(51, 56, 56, 0.07)',
        shadowButton: 'rgba(0, 0, 0, 0.04)',
        overlayImage: 'rgba(106, 111, 119, 0.1)',
        borderDefault: '#E5E5E5',
        borderInput: '#D9D9D9',
    },
    transition: {
        primary: 'all 0.25s linear',
    },
}

export const AntdThemeConfig = {
    token: {
        colorPrimary: PRIMARY_COLOR,
        colorSecondary: SECONDARY_COLOR,
        colorLink: PRIMARY_COLOR,
        fontFamily: 'Inter',
        colorLinkHover: PRIMARY_COLOR,
    },
}