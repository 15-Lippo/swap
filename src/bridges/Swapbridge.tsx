import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Lisprocoin',
  fromChain: 56,
  fromToken: '0xE62A9bc6eDe534E18Dd2793Dcaf5A2B6df112180',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
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
