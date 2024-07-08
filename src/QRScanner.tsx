import { BrowserMultiFormatReader } from '@zxing/library';
import * as React from 'react';
import { useZxing } from './hooks';

export const QRScannerCore: any = ({
  onResult = () => {},
  onError = () => {},
}) => {
  const { ref } = useZxing({ onResult, onError });
  return <video style={{ width: '600px', height: '400px' }} ref={ref} />;
};

export const QRScanner = () => {
  const onResult = (e) => {
    console.log(e);
  };
  const onError = (e) => {
    // console.log(e)
  };

  return <QRScannerCore onResult={onResult} onError={onError} />;
};
