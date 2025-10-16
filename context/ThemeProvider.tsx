import { AppColors, darkColors, lightColors } from "@/theme/colors";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { useColorScheme } from "react-native";

type ThemeContextType = {
  isDark: boolean;
  colors: AppColors;
};
const ThemeContext = createContext<ThemeContextType>({
  colors: lightColors,
  isDark: false,
});

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);
  return (
    <ThemeContext.Provider value={{ isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
