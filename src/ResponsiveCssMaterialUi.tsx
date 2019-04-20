import * as React from 'react';
import withWidth from '@material-ui/core/withWidth';

const ResponsiveCssMaterialUi = (props: ResponsiveCssMaterialUiProps) => {
  React.Children.only(props.children);

  const css: React.CSSProperties = getCss(props);

  const newChild: React.ReactElement[] = React.Children.map(props.children, (child: React.ReactElement<any>) => {
    const style: React.CSSProperties = child.props.style;
    const newStyle: React.CSSProperties = !style ? css : { ...style, ...css };
    return React.cloneElement(child, { style: newStyle });
  });

  return <React.Fragment>{newChild}</React.Fragment>;
};

const getCss = (props: ResponsiveCssMaterialUiProps): React.CSSProperties => {
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
      
      throw new Error("Please define at least one of 'md', 'lg', 'sm', 'xl', 'xs'");
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
