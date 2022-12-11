import * as React from 'react';
import { useWidth } from './useWidth';

const ResponsiveCssMaterialUi = (props: ResponsiveCssMaterialUiProps) => {
  React.Children.only(props.children);

  const css: React.CSSProperties | undefined = getCss(props);

  const newChild: JSX.Element[] = React.Children.map<
    JSX.Element,
    React.ReactNode
  >(props.children, (child: React.ReactElement<HTMLElement>) => {
    const style = getStyle(child.props.style, css);
    return React.cloneElement(child, { style });
  })!;

  return <React.Fragment>{newChild}</React.Fragment>;
};

const getStyle = (
  style?: CSSStyleDeclaration,
  css?: React.CSSProperties
): CSSStyleDeclaration | undefined => {
  if (!css) {
    return style;
  }

  return style ? { ...style, ...css } : (css as any);
};

const getCss = (
  props: ResponsiveCssMaterialUiProps
): React.CSSProperties | undefined => {
  const width = useWidth();
  switch (width) {
    case 'xl':
      if (!!props.xl) {
        consoleDebug(props.debug, width, 'xl');
        return props.xl;
      }
    case 'lg':
      if (!!props.lg) {
        consoleDebug(props.debug, width, 'lg');
        return props.lg;
      }
    case 'md':
      if (!!props.md) {
        consoleDebug(props.debug, width, 'md');
        return props.md;
      }
    case 'sm':
      if (!!props.sm) {
        consoleDebug(props.debug, width, 'sm');
        return props.sm;
      }
    case 'xs':
    default:
      if (!!props.xs) {
        consoleDebug(props.debug, width, 'xs');
        return props.xs;
      }
      consoleDebug(props.debug, width, 'none');
  }
};

const consoleDebug = (
  debug: boolean | undefined,
  windowWidth: string,
  appliedWidth: string
) => {
  if (debug) {
    console.debug('ResponsiveCssMaterialUi', { windowWidth, appliedWidth });
  }
};

interface ResponsiveCssMaterialUiProps {
  children: React.ReactNode;
  debug?: boolean;
  lg?: React.CSSProperties;
  md?: React.CSSProperties;
  sm?: React.CSSProperties;
  xl?: React.CSSProperties;
  xs?: React.CSSProperties;
}

export default ResponsiveCssMaterialUi;
