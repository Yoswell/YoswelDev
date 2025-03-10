export function Skills() {
    const images = [ "js", "dotnet", "git", "github", "debian", "java", "typescript", "cs", "py", "html", "react", "css" ]

    return (
        <div className="skills">
            <article>
                {Array.from({length: 2}).map(() => (
                    images.map((data) => (
                        <SkillBox url={data}></SkillBox>
                    ))
                ))}
            </article>
        </div>
    )
}

interface SkillBoxProps {
    url: string
}

function SkillBox({url}: SkillBoxProps) {
    return (
        <div className="skill-box">
            <img src={`https://skillicons.dev/icons?i=${url}`} alt='Skill image' decoding="async" loading="lazy" />
        </div>
    )
}
