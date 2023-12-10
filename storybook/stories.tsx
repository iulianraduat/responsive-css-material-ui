import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ResponsiveCssMaterialUi from '../src/ResponsiveCssMaterialUi';

const styles: { [key: string]: React.CSSProperties } = {
  text: {
    padding: 20,
    textAlign: 'center',
  },
};

const xs: React.CSSProperties = { backgroundColor: '#ff0000' };
const sm: React.CSSProperties = { backgroundColor: '#ff6600' };
const md: React.CSSProperties = { backgroundColor: '#ffcc00' };
const lg: React.CSSProperties = { backgroundColor: '#336699' };
const xl: React.CSSProperties = { backgroundColor: '#003366' };

const meta: Meta<typeof ResponsiveCssMaterialUi> = {
  title: 'ResponsiveCssMaterialUi',
  component: ResponsiveCssMaterialUi,
} as Meta<typeof ResponsiveCssMaterialUi>;
export default meta;
type Story = StoryObj<typeof ResponsiveCssMaterialUi>;

export const WithDebugDisabled = () => (
  <div>
    <ResponsiveCssMaterialUi xs={xs} md={md} sm={sm} lg={lg} xl={xl}>
      <div style={styles.text}>Text</div>
    </ResponsiveCssMaterialUi>
    <div>
      Please resize the page width to see different colors for different sizes
    </div>
  </div>
);

export const WithDebugEnabled = () => (
  <div>
    <ResponsiveCssMaterialUi
      xs={xs}
      md={md}
      sm={sm}
      lg={lg}
      xl={xl}
      debug={true}
    >
      <div style={styles.text}>Text</div>
    </ResponsiveCssMaterialUi>
    <div>
      Please resize the page width to see different colors for different sizes
    </div>
  </div>
);
