import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Perseus',
  fromChain: 137,
  fromToken: '0x72bd80445b0db58ebe3E8dB056529D4C5FAF6F2f',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetSwap = () => {
  return <LiFiWidget config={widgetConfig} />;
};