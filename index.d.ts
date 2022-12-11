import * as React from 'react';

export interface ResponsiveCssMaterialUiProps  {
  children: React.ReactNode;
  debug?: boolean;
  lg?: React.CSSProperties;
  md?: React.CSSProperties;
  sm?: React.CSSProperties;
  xl?: React.CSSProperties;
  xs?: React.CSSProperties;
}

declare class ResponsiveCssMaterialUi extends React.Component<ResponsiveCssMaterialUiProps> {}

declare module 'responsive-css-material-ui' {}

export default ResponsiveCssMaterialUi;
