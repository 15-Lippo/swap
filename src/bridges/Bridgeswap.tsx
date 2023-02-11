import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'wmatic',
  fromChain: 137,
  fromToken: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',

const widgetConfig: WidgetConfig = {
  integrator: 'lisprocoin',
  fromChain: 137,
  ToToken: '0x70e546c7a2ca4495cfcbe263a3b6d5ce68b2204c',
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '16px',
  },
};

export const WidgetSwap = () => {
  return <LiFiWidget config={widgetConfig} />;
};
