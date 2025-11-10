export interface NavLink {
  title: string;
  link: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface PortfolioData {
  name: string;
  description: string;
  navLinks: NavLink[];
  themeColors: ThemeColors;
}
