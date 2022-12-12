import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Perseus',
  toChain: 137,
  toToken: '	0x2776cAFe6dcAeB292A013Cb03e3aB332DAa52e8F',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const SwapWidget = () => {
  return <LiFiWidget config={widgetConfig} />;
};
