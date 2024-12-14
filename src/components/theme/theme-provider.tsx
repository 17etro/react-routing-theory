import { ThemeProvider as BaseThemeProvider } from "next-themes";

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </BaseThemeProvider>
  );
};

export { ThemeProvider };
