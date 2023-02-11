import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Lisprocoin',
  fromChain: 137,
  fromToken: '0x70e546c7a2ca4495cfcbe263a3b6d5ce68b2204c',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetSwap = () => {
  return <LiFiWidget config={widgetConfig} />;
};
