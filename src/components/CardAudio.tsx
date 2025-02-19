import { useRef, useState } from 'react'
import { Pause, Play } from '@/components/icons/HeroIcons'

interface CardAudioProps {
    music: string
    title: string
    author: string
}

export function CardAudio({ music, title, author }: CardAudioProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

    const togglePlay = () => {
        if (!audioRef.current) return
        if (audioRef.current.paused) {
            audioRef.current.play()
            setIsPlaying(true)
        } else {
            audioRef.current.pause()
            setIsPlaying(false)
        }
    }

    const updateProgress = () => {
        if (!audioRef.current) return
        const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100
        setProgress(percent)
    }

    return (
        <div className={`cardAudio ${isPlaying ? 'bubble' : ''}`}>
            <audio
                ref={audioRef}
                src={music}
                onTimeUpdate={updateProgress}>
            </audio>
            <img src="/darkIcons.webp" alt="Image to audio"></img>
            <div className='row'>
                <h4>{title}</h4>
                <h6>{author}</h6>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => {
                        if (!audioRef.current) return;
                        const newTime = (audioRef.current.duration * +e.target.value) / 100;
                        audioRef.current.currentTime = newTime;
                        setProgress(+e.target.value);
                    }}>
                </input>
            </div>
            <button className='play' onClick={togglePlay}>
                {isPlaying ? <Pause /> : <Play />}
            </button>
        </div>
    );
}
