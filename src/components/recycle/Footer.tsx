import { Copy, Download } from "@/components/icons/HeroIcons"

export function Footer() {
    return (
        <footer>
            <div className="grizzly-card">
                <h1 className='title'>Grizzlyspark</h1>
                <p className='subTitle'>A powerful tool written in Python designed to assist in CTFs</p>
                <div className='clone-git-tool'>
                    <Copy/>
                    <input value="git clone https://github.com/Yoswell/GrizzlySpark"></input>
                    <Download/>
                </div>
            </div>
        </footer>
    )
}