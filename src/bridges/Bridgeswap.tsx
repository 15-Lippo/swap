import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Lisprocoin',
  fromChain: 137,
  fromToken: '0x2776cAFe6dcAeB292A013Cb03e3aB332DAa52e8F',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};
const widgetConfig: WidgetConfig = {
  integrator: 'Lisprocoin',
  fromChain: 56,
  fromToken: '0xE62A9bc6eDe534E18Dd2793Dcaf5A2B6df112180',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetSwap = () => {
  return <LiFiWidget config={widgetConfig} />;
};
