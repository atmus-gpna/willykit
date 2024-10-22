export type TypographyProps = {
  format?: TTypography;
  children: string;
  lineHeight?: string | number;
  fontWeight?: string | number;
  fontSize?: string | number;
  margin?: number;
  padding?: number;
  color?: string;
};

// Определяем типы заголовков
export type TTypography = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export enum ETypography {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
}
