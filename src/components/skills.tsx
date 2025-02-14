import { motion } from 'framer-motion'
import { useState } from 'react'

export function Skills() {
    const skills = [
        "JavaScript", ".NET", "Git", "Linux", "Debian", "Java",
        "TypeScript", "C#", "Python", "HTML", "React", "VS Code",
        "Vite", "Kali", "Visual Studio", "Postman", "CSS"
    ]

    return (
        <div className="cont-squares">
            <span className='float-word'>Movies lover</span>
            <div className="cont1">
                {skills.map((skill, index) => (
                    <SkillBox key={index} name={skill} />
                ))}
            </div>
        </div>
    )
}

interface SkillBoxProps {
    name: string
}
function SkillBox({name}: SkillBoxProps) {
    const [rotation, setRotation] = useState(0)

    return (
        <motion.div
            className="skill-box"
            onHoverStart={() => setRotation(Math.random() * 30 - 10)}
            whileHover={{ scale: 1.2, rotate: rotation }}
            transition={{ duration: 0.3, ease: [0.95, 0.05, 0.795, 0.035] }}>
            <motion.span
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="tooltip">
                {name}
            </motion.span>
            <span className="skill-text">{name}</span>
        </motion.div>
    )
}
