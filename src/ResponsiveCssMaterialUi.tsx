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
        return props.xl;
      }
    case 'lg':
      if (!!props.lg) {
        return props.lg;
      }
    case 'md':
      if (!!props.md) {
        return props.md;
      }
    case 'sm':
      if (!!props.sm) {
        return props.sm;
      }
    case 'xs':
    default:
      if (!!props.xs) {
        return props.xs;
      }
  }
};

interface ResponsiveCssMaterialUiProps extends React.Props<any> {
  lg?: React.CSSProperties;
  md?: React.CSSProperties;
  sm?: React.CSSProperties;
  width: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  xl?: React.CSSProperties;
  xs?: React.CSSProperties;
}

export default withWidth()(ResponsiveCssMaterialUi);
