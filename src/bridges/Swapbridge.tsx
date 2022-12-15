import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Lisprocoin',
  fromChain: 137,
  fromToken: '0x2776cafe6dcaeb292a013cb03e3ab332daa52e8f',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};



export const SwapWidget = () => {
  return <LiFiWidget config={widgetConfig} />;
};
