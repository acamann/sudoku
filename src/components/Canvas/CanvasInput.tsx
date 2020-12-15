import React, { useRef, useEffect, useState, useCallback } from 'react';

type Coordinate = {
  x: number;
  y: number;
};

interface CanvasInputProps {
  children?: React.ReactNode,
  onFinishDrawing: (canvas: HTMLCanvasElement) => void,
}

const CanvasInput: React.FC<CanvasInputProps> = (props: CanvasInputProps) => {
  const onFinishDrawing = props.onFinishDrawing;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);

  const startPainting = useCallback((event: MouseEvent | TouchEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
        setIsPainting(true);
        setMousePosition(coordinates);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.addEventListener('mousedown', startPainting);
      canvas.addEventListener('touchstart', startPainting);
      return () => {
        canvas.removeEventListener('mousedown', startPainting);
        canvas.removeEventListener('touchstart', startPainting);
      };
    } 
  }, [startPainting]);

  const paint = useCallback((event: MouseEvent | TouchEvent) => {
    if (isPainting) {
      const newMousePosition = getCoordinates(event);
      if (mousePosition && newMousePosition) {
        drawLine(mousePosition, newMousePosition);
        setMousePosition(newMousePosition);
      }
    }
  }, [isPainting, mousePosition]);

  const drawLine = (originalPosition: Coordinate, newPosition: Coordinate) => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        context.strokeStyle = 'black';
        context.lineJoin = 'round';
        context.lineWidth = 5;

        context.beginPath();
        context.moveTo(originalPosition.x, originalPosition.y);
        context.lineTo(newPosition.x, newPosition.y);
        context.closePath();

        context.stroke();
      }
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      canvas.addEventListener('mousemove', paint);
      canvas.addEventListener('touchmove', paint);
      return () => {
        canvas.removeEventListener('mousemove', paint);
        canvas.removeEventListener('touchmove', paint);
      };
    }
  }, [paint]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      onFinishDrawing(canvas);
    }
  }, [onFinishDrawing]);

  useEffect(() => {
    if (canvasRef.current && isPainting) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      canvas.addEventListener('mouseup', exitPaint);
      canvas.addEventListener('mouseleave', exitPaint);
      canvas.addEventListener('touchend', exitPaint);
      return () => {
        canvas.removeEventListener('mouseup', exitPaint);
        canvas.removeEventListener('mouseleave', exitPaint);
        canvas.removeEventListener('touchend', exitPaint);
      };
    }
  }, [exitPaint, isPainting]);

  const getCoordinates = (event: TouchEvent | MouseEvent): Coordinate | undefined => {
    if (canvasRef.current) {
      const canvas: HTMLCanvasElement = canvasRef.current;
      var rect = canvas.getBoundingClientRect();
      const x = ((event instanceof TouchEvent) ? event.targetTouches[0].clientX : event.clientX) - rect.left;
      const y = ((event instanceof TouchEvent) ? event.targetTouches[0].clientY : event.clientY) - rect.top;
      return {x, y};
    }
  };

  return <canvas ref={canvasRef} {...props} />;
}

export default CanvasInput;