import React, { useState } from 'react';
import { recognizeDigitFromCanvas } from '../../utils/digitRecognition';
import CanvasInput from './CanvasInput';

interface NumberCanvasProps {
  //setValue?: () => void;
}

const NumberCanvas: React.FC<NumberCanvasProps> = (props: NumberCanvasProps) => {
  const [value, setValue] = useState<number>();

  const processCanvas = (canvas: HTMLCanvasElement): void => {
    setValue(recognizeDigitFromCanvas(canvas));
  }

  return (
    <>
    <CanvasInput onFinishDrawing={processCanvas} />
    <div>{value}</div>
    </>
  );
}

export default NumberCanvas;