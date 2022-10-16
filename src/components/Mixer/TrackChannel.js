/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import webAudioPeakMeter from 'web-audio-peak-meter';
import useAudioContext from '../../hooks/useAudioContext';

function TrackChannel({ children }) {
  const audioRef = useRef(null);
  const meterRef = useRef(null);
  const ctx = useAudioContext();

  useEffect(() => {
    let init = false;
    if (!init && audioRef.current && meterRef.current) {
      console.log('render meter');
      const srcNode = ctx.createMediaElementSource(audioRef.current);
      srcNode.connect(ctx.destination);
      const meterNode = webAudioPeakMeter.createMeterNode(srcNode, ctx);
      webAudioPeakMeter.createMeter(meterRef.current, meterNode, {});
    }
    return () => {
      init = true;
    };
  }, []);

  console.log('here');

  return (
    <div className="h-full">
      <audio hidden ref={audioRef} />
      <div ref={meterRef} className="w-16 h-24" />
      {children}
    </div>
  );
}

export default TrackChannel;
