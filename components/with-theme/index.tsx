import { ThemeProvider } from "styled-components";
import { memo } from "react";
import theme from "./theme";

const WithThemeComponent = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default memo(WithThemeComponent);
