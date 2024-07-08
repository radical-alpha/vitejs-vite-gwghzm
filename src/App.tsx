import * as React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { QRScannerCore } from './QRScanner';
import { QrReader } from '@blackbox-vision/react-qr-reader';

function App() {
  const [lib, setLib] = React.useState('Blackbox');
  const [result, setResult] = React.useState('');

  const constraints = {
    facingMode: 'environment',
  };

  const onOptionChange = (e) => {
    setLib(e.target.value);
    setResult('');
  };

  const logResult = (data) => {
    console.log(data);
    setResult((state) => {
      console.log('State :: ', state);
      if (!state) {
        return data;
      } else {
        return state;
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="scanner">
          <select
            style={{ width: '100px' }}
            value={lib}
            onChange={onOptionChange}
          >
            <option>Blackbox</option>
            <option>Zxing</option>
          </select>
          <p />
          <button style={{ width: '100px' }} onClick={() => setResult('')}>
            Reset
          </button>
          <div className="result">
            <p>Result :</p>
            <p
              style={{ fontSize: '20px', border: '1px solid', padding: '10px' }}
            >
              <b>{result}</b>
            </p>
          </div>

          {lib === 'Blackbox' ? (
            <QrReader
              constraints={constraints}
              onResult={(result) => logResult(result?.getText() ?? '')}
              videoId={'blackbox-scanner'}
              videoStyle={{ width: '600px', height: '400px' }}
              // scanDelay={10000}
            />
          ) : (
            <QRScannerCore onResult={(e: any) => logResult(e.text)} />
          )}
          <p />
        </div>
      </div>
    </>
  );
}

export default App;
