import { Copy } from '@/components/icons/HeroIcons' 

export function CardGrizzly() {
    const repoUrl = "git clone https://github.com/Yoswell/GrizzlySpark.git"

    const handleCopyClick = async () => {
        try {
            const textToCopy = repoUrl;
            await navigator.clipboard.writeText(textToCopy);
        } catch (err) { }
    }

    return (
        <div className="grizzly-card">
            <h1 className='title'>Download manual repo</h1>
            <p className='subTitle'>A powerful tool written in Python designed to assist in CTFs</p>
            <div className='clone-git-tool'>
                <button onClick={() => handleCopyClick()}>
                    <Copy/>
                </button>
                <input disabled contentEditable={false} value={repoUrl}></input>
            </div>
        </div>
    )
}