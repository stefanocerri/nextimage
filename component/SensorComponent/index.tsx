import React, { useEffect, useState } from 'react';

interface AccelerometerData {
  x: number | null;
  y: number | null;
  z: number | null;
}

interface GyroscopeData {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
}

const SensorComponent: React.FC = () => {
  const [accelerometerData, setAccelerometerData] = useState<AccelerometerData>({
    x: null,
    y: null,
    z: null,
  });
  const [gyroscopeData, setGyroscopeData] = useState<GyroscopeData>({
    alpha: null,
    beta: null,
    gamma: null,
  });

  useEffect(() => {
    const handleAccelerometer = (event: DeviceMotionEvent) => {
      setAccelerometerData({
        x: event.acceleration?.x || null,
        y: event.acceleration?.y || null,
        z: event.acceleration?.z || null,
      });
    };

    const handleGyroscope = (event: DeviceOrientationEvent) => {
      setGyroscopeData({
        alpha: event.alpha || null,
        beta: event.beta || null,
        gamma: event.gamma || null,
      });
    };

    window.addEventListener('devicemotion', handleAccelerometer);
    window.addEventListener('deviceorientation', handleGyroscope);

    return () => {
      window.removeEventListener('devicemotion', handleAccelerometer);
      window.removeEventListener('deviceorientation', handleGyroscope);
    };
  }, []);

  return (
    <div>
      <div>
        <h2>Accelerometer Data:</h2>
        <p>X: {accelerometerData.x}</p>
        <p>Y: {accelerometerData.y}</p>
        <p>Z: {accelerometerData.z}</p>
      </div>

      <div>
        <h2>Gyroscope Data:</h2>
        <p>Alpha: {gyroscopeData.alpha}</p>
        <p>Beta: {gyroscopeData.beta}</p>
        <p>Gamma: {gyroscopeData.gamma}</p>
      </div>
    </div>
  );
};

export default SensorComponent;
