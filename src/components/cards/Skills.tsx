export function Skills() {
    const images = [ "js", "dotnet", "git", "github", "debian", "java", "typescript", "cs", "py", "html", "react", "css" ]

    return (
        <div className="skills">
            <article>
                <div className="shadow">
                    {Array.from({length: 8}).map(() => (
                        images.map((data) => (
                            <SkillBox url={data}></SkillBox>
                        ))
                    ))}
                </div>
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
