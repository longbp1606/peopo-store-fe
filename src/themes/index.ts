const PRIMARY_COLOR: string = '#36CFC9';
const SECONDARY_COLOR: string = '#31C3E0';

export const theme = {
    light: '',
    dark: '',
    colors: {
        primary: PRIMARY_COLOR,
        textPrimary: 'rgba(0, 0, 0, 0.85)',
        white: '#FFF',
        shadowCart: 'rgba(56, 56, 56, 0.06)',
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