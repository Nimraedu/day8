import React from 'react'

interface SampleProps {
    n:number;
}
const Sample = ({n}: SampleProps) => {
    function kmsToText(n:number): string {
        const kms = Math.floor(n)
        const meters = (n*1000) % 1000;

        return `${kms} Kilometers and ${meters} Meters`;
    }
  return (
    <div>
      Sample {kmsToText(0.5)}
    </div>
  )
}

export default Sample
