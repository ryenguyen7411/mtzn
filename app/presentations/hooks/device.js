import { useEffect, useState } from 'react';
import { detectMobileDevice } from 'utils/helpers';

export function useDevice () {
  const [device, setDevice] = useState(detectMobileDevice());

  useEffect(() => {
    const handleResize = () => {
      const nextDevice = detectMobileDevice();
      if (device !== nextDevice) setDevice(nextDevice);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [device]);

  return [device, device === 'mobile'];
}
