import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { createStyledBreakpointsTheme } from 'styled-breakpoints';
import { ConfigProvider, App as AppAntd } from 'antd';
import viVN from 'antd/es/locale/vi_VN';
import { AntdThemeConfig } from './themes/index.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import GlobalStyles from './themes/globalStyles.ts';

export const breakpoints = {
  xs: '360px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
} as const;

const theme: DefaultTheme = createStyledBreakpointsTheme({
  breakpoints,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={viVN} theme={AntdThemeConfig}>
        <AppAntd>
          <Provider store={store}>
            <App />
          </Provider>
        </AppAntd>
        <GlobalStyles/>
      </ConfigProvider>
    </ThemeProvider>
  </StrictMode>,
)
