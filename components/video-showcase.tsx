"use client"

import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface VideoShowcaseProps {
  title: string
  description: string
  videoSrc: string
  posterSrc: string
}

export default function VideoShowcase({ title, description, videoSrc, posterSrc }: VideoShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          await videoRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log("Play was prevented:", error)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(currentProgress)
    }
  }

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate)

      // Handle play/pause with proper promise handling
      const playVideo = async () => {
        try {
          if (videoElement.paused) {
            await videoElement.play()
            setIsPlaying(true)
          }
        } catch (error) {
          console.log("Play was prevented:", error)
          setIsPlaying(false)
        }
      }

      const pauseVideo = () => {
        if (!videoElement.paused) {
          videoElement.pause()
          setIsPlaying(false)
        }
      }

      // Auto-play when in viewport (muted)
      let isObserving = true
      const observer = new IntersectionObserver(
        (entries) => {
          if (!isObserving) return

          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Small timeout to prevent rapid play/pause calls
              setTimeout(() => {
                if (isObserving) playVideo()
              }, 100)
            } else {
              pauseVideo()
            }
          })
        },
        { threshold: 0.6 },
      )

      observer.observe(videoElement)

      return () => {
        isObserving = false
        videoElement.removeEventListener("timeupdate", handleTimeUpdate)
        observer.disconnect()
      }
    }
  }, [])

  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-900">
      {/* Video */}
      <div className="relative aspect-video w-full overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster={posterSrc}
          muted={isMuted}
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
          <p className="mt-2 text-gray-200">{description}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>

          <button
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="relative h-1 flex-1 mx-4 rounded-full bg-gray-700">
          <div className="absolute h-full rounded-full bg-blue-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}
