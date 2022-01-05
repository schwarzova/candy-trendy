import React from 'react';
import Image from 'next/image';

type Props = {
  isOn: boolean;
};

function Lamp(props: Props) {
  return props.isOn ? (
    <Image src="/images/lamp.png" alt="Street lamp" width={150} height={120} />
  ) : (
    <Image
      src="/images/lampOff.png"
      alt="Street lamp"
      width={150}
      height={120}
    />
  );
}

export default Lamp;
