/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import webAudioPeakMeter from 'web-audio-peak-meter';
import useAudioContext from '../../hooks/useAudioContext';
import './MixerChannel.css';

// console.log(webAudioPeakMeter);

function MixerChannel({
  children, onClick, darkMode, selected, onDoubleClick
}) {
  const audioRef = useRef(null);
  const meterRef = useRef(null);
  const ctx = useAudioContext();

  useEffect(() => {
    let init = false;
    if (!init && audioRef.current && meterRef.current) {
      const srcNode = ctx.createMediaElementSource(audioRef.current);
      srcNode.connect(ctx.destination);
      const meterNode = webAudioPeakMeter.createMeterNode(srcNode, ctx);
      webAudioPeakMeter.createMeter(meterRef.current, meterNode, {});
    }
    return () => {
      init = true;
    };
  }, []);

  return (
    <div
      role="presentation"
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`flex flex-col justify-between items-center h-full mixer-channel border ${darkMode ? 'border-orange-400' : 'border-black'} ${selected ? 'bg-blue-900 text-orange-400' : ''}`}
    >
      <audio hidden ref={audioRef} />
      <div ref={meterRef} className="mixer-channel-peak-meter" />
      {children}
    </div>
  );
}

export default MixerChannel;
