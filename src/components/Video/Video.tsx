"use client";

import { useInView } from "framer-motion";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

type VideoProps = React.ComponentPropsWithoutRef<"video"> & {
  /** Forces playback to pause regardless of viewport visibility. */
  forcePause?: boolean;
  /** Seeks to this timestamp (in seconds) once the video's metadata loads. */
  startTime?: number;
};

/**
 * Custom video component that plays when in view of the user, and pauses when not.
 */
const Video = forwardRef<HTMLVideoElement, VideoProps>(function Video(
  { forcePause, startTime, onLoadedMetadata, ...props },
  forwardedRef,
) {
  const ref = useRef<HTMLVideoElement>(null);
  useImperativeHandle(forwardedRef, () => ref.current as HTMLVideoElement);

  const isInView = useInView(ref, { amount: 0.7 });

  useEffect(() => {
    if (!ref.current) return;

    if (isInView && !forcePause) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isInView, forcePause]);

  return (
    <video
      playsInline
      muted
      controls
      ref={ref}
      onLoadedMetadata={(e) => {
        if (startTime) {
          e.currentTarget.currentTime = startTime;
        }
        onLoadedMetadata?.(e);
      }}
      {...props}
    />
  );
});

export default Video;
