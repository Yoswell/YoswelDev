import { useRef, useState } from 'react'
import { Pause, Play } from '@/components/icons/HeroIcons'

interface CardAudioProps {
    music: string
    title: string
    author: string
    type: number
}

export function CardAudio({music, title, author, type}: CardAudioProps) {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    const updateProgress = () => {
        const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percent);
    }

    return (
        <div className='cardAudio'>
            <audio
                ref={audioRef}
                src={music}
                onTimeUpdate={updateProgress}>
            </audio>
            {type === 1 && <img src="/src/assets/Icon1.gif" alt="Image to audio"></img>}
            {type === 2 && <img src="/src/assets/Icon2.gif" alt="Image to audio"></img>}
            {type === 3 && <img src="/src/assets/Icon3.gif" alt="Image to audio"></img>}
            <div className='row'>
                <h4>{title}</h4>
                <h6>{author}</h6>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => {
                        const newTime = (audioRef.current.duration * e.target.value) / 100;
                        audioRef.current.currentTime = newTime;
                        setProgress(e.target.value);
                    }}>
                </input>
            </div>
            <button className='play' onClick={togglePlay}>
                {isPlaying 
                    ? ( <Pause/> )
                    : ( <Play/> )
                }
            </button>
        </div>
    );
}
