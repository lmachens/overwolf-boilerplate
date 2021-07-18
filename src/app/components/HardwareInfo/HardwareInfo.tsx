import { useEffect, useState } from 'react';
import classes from './HardwareInfo.module.css';

function HardwareInfo(): JSX.Element {
  const [cpu, setCPU] = useState<string | null>(null);

  useEffect(() => {
    overwolf.utils.getSystemInformation((info) => {
      if (info.success && info.systemInfo && info.systemInfo.CPU) {
        setCPU(info.systemInfo.CPU);
      }
    });
  }, []);

  return <p className={classes.message}>CPU: {cpu}</p>;
}

export default HardwareInfo;
