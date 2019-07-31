import * as React from 'react';
import withWidth from '@material-ui/core/withWidth';

const ResponsiveCssMaterialUi = (props: ResponsiveCssMaterialUiProps) => {
  React.Children.only(props.children);

  const css: React.CSSProperties | undefined = getCss(props);

  const newChild: React.ReactElement[] = React.Children.map(props.children, (child: React.ReactElement<any>) => {
    let newStyle: React.CSSProperties | undefined = child.props.style;
    if (!!css) {
      newStyle = !newStyle ? css : { ...newStyle, ...css };
    }
    return React.cloneElement(child, { style: newStyle });
  });

  return <React.Fragment>{newChild}</React.Fragment>;
};

const getCss = (props: ResponsiveCssMaterialUiProps): React.CSSProperties | undefined => {
  switch (props.width) {
    case 'xl':
      if (!!props.xl) {
        consoleDebug(props.debug, props.width, 'xl');
        return props.xl;
      }
    case 'lg':
      if (!!props.lg) {
        consoleDebug(props.debug, props.width, 'lg');
        return props.lg;
      }
    case 'md':
      if (!!props.md) {
        consoleDebug(props.debug, props.width, 'md');
        return props.md;
      }
    case 'sm':
      if (!!props.sm) {
        consoleDebug(props.debug, props.width, 'sm');
        return props.sm;
      }
    case 'xs':
    default:
      if (!!props.xs) {
        consoleDebug(props.debug, props.width, 'xs');
        return props.xs;
      }
      consoleDebug(props.debug, props.width, 'none');
  }
};

const consoleDebug = (debug: boolean | undefined, windowWidth: string, appliedWidth: string) => {
  if (debug) {
    console.debug('ResponsiveCssMaterialUi', { windowWidth, appliedWidth });
  }
};

interface ResponsiveCssMaterialUiProps extends React.Props<any> {
  debug?: boolean;
  lg?: React.CSSProperties;
  md?: React.CSSProperties;
  sm?: React.CSSProperties;
  width: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  xl?: React.CSSProperties;
  xs?: React.CSSProperties;
}

export default withWidth()(ResponsiveCssMaterialUi);
