import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Perseus',
  toChain: 137,
  toToken: '0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const SwapWidget = () => {
  return <LiFiWidget config={widgetConfig} />;
};