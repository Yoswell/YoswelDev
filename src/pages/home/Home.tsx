import { About } from '@/components/About'
import { CardProject } from '@/components/cards/CardProject'
import { CardText } from '@/components/cards/CardText'
import { Title } from '@/components/recycle/HeaderTitle'
import { Nav } from '@/components/Nav'
import { Contact } from '@/components/Contact'
import { Develop, Flag, Github, Global, Happy, Link } from '@/components/icons/HeroIcons'

export function Home() {
    return (
        <div className='container-home'>
            <div className='lines'>
                <div className='line line-1'></div>
                <div className='line line-2'></div>

                <Nav />
                <div className='scroll-sec'>
                    <About />
                    <section className='title-sec'>
                        <span>Hackthebox</span>
                        <span>IBM</span>
                        <span>Hacker</span>
                        <span>Pentester</span>
                        <span>Developer</span>
                        <span>Full-Stack</span>
                        <span>CTF Player</span>
                        <span>CyberSec Challenge 2024</span>
                        <span>X-Force</span>
                        <span>Machines</span>
                        <span>Writeups</span>
                    </section>

                    <Title tag='experience' title='Experience' subTitle='A showcase of my professional journey, highlighting key achievements and expertise in cybersecurity, CTF challenges, and offensive security.' />
                    <section className='experience' id='exp'>
                        <article className='card card-experience'>
                            <span className='tag'>Experience</span>
                            <h3 className='title text-gradient-color-mm'>IBM X-Force Penetration Tester Intern</h3>
                            <p>Conducted vulnerability assessments and penetration testing on web applications and network infrastructure as part of IBM's security team. Identified and documented security vulnerabilities, provided remediation recommendations, and assisted in developing security assessment reports. Gained hands-on experience with tools like Burp Suite, Metasploit, and Nmap while working under senior security consultants.</p>
                            <span className='tag-date'>May 2025 - Present</span>
                            <div className='ilustrator'>
                                <div>
                                    <span className="keyword">Rootkit</span>
                                    <span className="keyword">Zero-Day</span>
                                    <span className="keyword">APT</span>
                                    <span className="keyword">C2</span>
                                    <span className="keyword">SQLi</span>
                                    <span className="keyword">XSS</span>
                                    <span className="keyword">XXE</span>
                                    <span className="keyword">RCE</span>
                                    <span className="keyword">LPE</span>
                                    <span className="keyword">MITRE</span>
                                    <span className="keyword">ATT&CK</span>
                                    <span className="keyword">Nmap</span>
                                    <span className="keyword">Metasploit</span>
                                    <span className="keyword">Burp</span>
                                    <span className="keyword">Ghidra</span>
                                    <span className="keyword">IDA</span>
                                    <span className="keyword">Frida</span>
                                    <span className="keyword">Radare2</span>
                                    <span className="keyword">ROP</span>
                                    <span className="keyword">ASLR</span>
                                    <span className="keyword">DEP</span>
                                    <span className="keyword">PWN</span>
                                    <span className="keyword">ELF</span>
                                    <span className="keyword">PE</span>
                                    <span className="keyword">DLL</span>
                                    <span className="keyword">IoT</span>
                                    <span className="keyword">SCADA</span>
                                    <span className="keyword">RFID</span>
                                    <span className="keyword">SDR</span>
                                    <span className="keyword">VPN</span>
                                    <span className="keyword">TOR</span>
                                    <span className="keyword">Hacker</span>
                                    <span className="keyword">Pentester</span>
                                    <span className="keyword">IBM</span>
                                    <span className="keyword">Command</span>
                                    <span className="keyword">Linux</span>
                                    <span className="keyword">Costa Rica</span>
                                    <span className="keyword">X-Force</span>
                                    <span className="keyword">Trust</span>
                                    <span className="keyword">Security</span>
                                    <span className="keyword">Golden</span>
                                    <span className="keyword">Ticket</span>
                                    <span className="keyword">PassThe</span>
                                    <span className="keyword">JWT</span>
                                    <span className="keyword">CSRF</span>
                                    <span className="keyword">SSRF</span>
                                    <span className="keyword">XXE</span>
                                    <span className="keyword">SAML</span>
                                    <span className="keyword">OAuth</span>
                                    <span className="keyword">WAF</span>
                                    <span className="keyword">Bypass</span>
                                </div>
                                <span className='company-name'>IBM</span>
                            </div>
                        </article>
                        <article className='card card-experience'>
                            <span className='tag'>Experience</span>
                            <h3 className='title text-gradient-color-mm'>NicaSecurity Developer Volunteer</h3>
                            <p>I am part of the community contributing to the development of web tools and the creation of CTF challenges, with the aim of supporting learning and cybersecurity. Teamwork to design interactive content that fosters a collaborative space, where participants can improve their technical skills.</p>
                            <span className='tag-date'>Oct 2024 - Jan 2025</span>
                            <div className='ilustrator'>
                                <div>
                                    <span className="keyword">Rootkit</span>
                                    <span className="keyword">Zero-Day</span>
                                    <span className="keyword">APT</span>
                                    <span className="keyword">C2</span>
                                    <span className="keyword">SQLi</span>
                                    <span className="keyword">XSS</span>
                                    <span className="keyword">XXE</span>
                                    <span className="keyword">RCE</span>
                                    <span className="keyword">LPE</span>
                                    <span className="keyword">MITRE</span>
                                    <span className="keyword">ATT&CK</span>
                                    <span className="keyword">Nmap</span>
                                    <span className="keyword">Metasploit</span>
                                    <span className="keyword">Burp</span>
                                    <span className="keyword">Ghidra</span>
                                    <span className="keyword">IDA</span>
                                    <span className="keyword">Frida</span>
                                    <span className="keyword">Radare2</span>
                                    <span className="keyword">ROP</span>
                                    <span className="keyword">ASLR</span>
                                    <span className="keyword">DEP</span>
                                    <span className="keyword">PWN</span>
                                    <span className="keyword">ELF</span>
                                    <span className="keyword">PE</span>
                                    <span className="keyword">DLL</span>
                                    <span className="keyword">IoT</span>
                                    <span className="keyword">SCADA</span>
                                    <span className="keyword">RFID</span>
                                    <span className="keyword">SDR</span>
                                    <span className="keyword">VPN</span>
                                    <span className="keyword">TOR</span>
                                    <span className="keyword">Hacker</span>
                                    <span className="keyword">Pentester</span>
                                    <span className="keyword">IBM</span>
                                    <span className="keyword">Command</span>
                                    <span className="keyword">Linux</span>
                                    <span className="keyword">Costa Rica</span>
                                    <span className="keyword">X-Force</span>
                                    <span className="keyword">Trust</span>
                                    <span className="keyword">Security</span>
                                    <span className="keyword">Golden</span>
                                    <span className="keyword">Ticket</span>
                                    <span className="keyword">PassThe</span>
                                    <span className="keyword">JWT</span>
                                    <span className="keyword">CSRF</span>
                                    <span className="keyword">SSRF</span>
                                    <span className="keyword">XXE</span>
                                    <span className="keyword">SAML</span>
                                    <span className="keyword">OAuth</span>
                                    <span className="keyword">WAF</span>
                                    <span className="keyword">Bypass</span>
                                </div>
                                <span className='company-name'>CNS</span>
                            </div>
                        </article>
                    </section>

                    <Title tag='hackthebox' title='Hackthebox' subTitle='Profetional experience in hacking, penetration testing against machines and analytic resolution problem solving Capture The Flags.' />
                    <section className='hackthebox-sec' id='exp'>
                        <article className='card-hacker'>
                            <div className='space-button space-button-htb'>
                                <a href='https://app.hackthebox.com/profile/1934172' target='_blanck' rel='noopener noreferrer' className='btn btn-htb'>
                                    <span>🏴</span>
                                </a>
                            </div>
                            <h1>VIsh0k</h1>
                            <div className='cont-data'>
                                <span className='card-data'>
                                    <Global />
                                    908
                                    <span>Global Rank</span>
                                </span>
                                <span className='card-data'>
                                    <Flag />
                                    38
                                    <span>User Owns</span>
                                </span>
                                <span className='card-data'>
                                    <Flag />
                                    37
                                    <span>System Owns</span>
                                </span>
                                <span className='card-data'>
                                    <Happy />
                                    0
                                    <span>Respect</span>
                                </span>
                            </div>
                        </article>
                    </section>
                
                    <Title tag='service' title='Services' subTitle='My journey in cybersecurity and web development-building secure, high-performance applications while tackling complex security challenges.' />
                    <section className='service' id='ser'>
                        <CardText
                            title='University Works'
                            text='I offer comprehensive assistance and support in carrying out university projects related to computer science. Whether you need help with algorithm design, data analysis, or software development, I provide in-depth research, structured writing, and clear documentation to ensure your project meets academic standards. My approach focuses on delivering quality, precision, and a well-organized workflow that guarantees clarity and professionalism, helping you achieve your academic goals with confidence.'>
                        </CardText>
                        <CardText
                            title='Web Development'
                            text='I specialize in high-quality web development tailored to your specific needs. From creating visually stunning static websites to building dynamic, interactive web applications, I ensure your online presence is robust, scalable, and user-friendly. Using the latest technologies and frameworks, I deliver solutions that enhance user engagement, improve performance, and drive your business success. Whether you need an e-commerce platform, a portfolio site, or a custom web app, I’ve got you covered.'>
                        </CardText>
                        <CardText
                            title='Training and Virtual Sessions'
                            text='I offer personalized training sessions and virtual classes in computer science and cybersecurity. Whether you’re a student, a professional, or part of a corporate team, I provide hands-on learning experiences that cover fundamental concepts to advanced techniques. My sessions are designed to enhance your skills, deepen your knowledge, and prepare you for real-world challenges. From programming languages like Python and JavaScript to cybersecurity best practices, I tailor each session to meet your specific learning goals.'>
                        </CardText>
                        <CardText
                            title='Software Development'
                            text='I provide custom software development services tailored to your business needs. From desktop applications to complex enterprise solutions, I create innovative, scalable, and efficient technologies that enhance productivity and streamline operations. My development process includes thorough planning, agile methodologies, and rigorous testing to ensure the final product meets your expectations. Whether you need a CRM system, inventory management software, or a custom SaaS solution, I deliver tools that drive long-term growth and success.'>
                        </CardText>
                        <CardText
                            title='Mobile App Development'
                            text='I specialize in creating high-performance mobile applications for both iOS and Android platforms. Whether you need a user-friendly app for your business or a custom solution for your specific requirements, I deliver intuitive, visually appealing, and feature-rich apps that meet your goals. My development process includes UI/UX design, backend integration, and rigorous testing to ensure a seamless user experience. From concept to launch, I work closely with you to bring your app ideas to life.'>
                        </CardText>
                        <CardText
                            title='Cybersecurity Consulting'
                            text='I provide expert cybersecurity consulting to protect your digital assets and ensure the integrity of your systems. My services include vulnerability assessments, penetration testing, and the implementation of robust security measures tailored to your organization’s needs. I help you identify potential risks, safeguard sensitive data, and maintain compliance with industry standards. Whether you’re a small business or a large enterprise, I offer solutions that enhance your security posture and give you peace of mind in an increasingly digital world.'>
                        </CardText>
                    </section>
                    
                    <Title tag='project' title='Projects' subTitle='A selection of my most impactful projects, showcasing my expertise in web development and cybersecurity, not all (only I considered most relevant).' />
                    <section className='projects' id='pro'>
                        <div className='circle-blur circle-blur-1'></div>
                        <CardProject 
                            className='card-project-1'
                            url=''
                            title='GrizzlySpark (web app)'
                            text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                            children1={
                                <a className='link' 
                                    href='http://grizzlyspark.runasp.net' 
                                    target='_blanck'><Link />
                                </a>
                            }>
                        </CardProject>
                        <CardProject 
                            className='card-project-2'
                            url=''
                            title='Clon Microsoft Learn (web app)'
                            text='This project, as shown in the image, is an almost exact replica of a specific page of the Microsoft Learn platform. Its purpose is to serve as a visual and structural clone of the user interface of that page. It is designed only for the border, which means that it is limited to the graphic representation and the visual structure of the original page, not including the functionality or dynamic interaction that characterizes the real version of the platform.'
                            children1={
                                <>
                                <a className='link'
                                    href='https://github.com/Yoswell/Clone_Microsoft_Learn'
                                    target='_black'><Github />
                                </a>
                                <a className='link link-2'
                                    href='https://clone-microsoft-learn.vercel.app' 
                                    target='_blanck'><Link />
                                </a>
                                </>
                            }>
                        </CardProject>
                        <CardProject 
                            className='card-project-3'
                            url=''
                            title='Devhouse (web app)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children1={
                                <a className='link link-tag'><Develop /></a>
                            }>
                        </CardProject>
                        <CardProject 
                            className='card-project-4'
                            url=''
                            title='GrizzlySpark (hacking tool)'
                            text='A powerful and versatile tool written in Python, specifically designed to assist CTF (Capture The Flag) participants in tackling a wide range of cybersecurity challenges. This tool offers several essential functionalities that streamline data analysis, cryptographic decoding, and manipulation of encoded or obfuscated information. By automating tedious tasks and providing intuitive features, it allows users to concentrate on the core problem-solving aspects of each challenge, enhancing efficiency and accuracy in CTF competitions.'
                            children1={
                                <a className='link' 
                                    href='https://github.com/Yoswell/GrizzlySpark' 
                                    target='_blanck'><Github />
                                </a>
                            }>
                        </CardProject>
                        <CardProject 
                            className='card-project-5'
                            url='/1.png'
                            title='Custom Timer (web page)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children1={
                                <>
                                <a className='link' 
                                    href='https://github.com/Yoswell/Custom_Timer' 
                                    target='_black'><Github />
                                </a>
                                <a className='link link-2' 
                                    href='https://yoswell.github.io/Custom_Timer' 
                                    target='_black'><Link />
                                </a>
                                </>
                            }>
                        </CardProject>
                        <CardProject 
                            className='card-project-6'
                            url='/2.png'
                            title='UnedHouse (web app)'
                            text='A technical documentation system designed to organize and centralize knowledge acquired from UNED university courses, with a focus on cybersecurity, programming. This project aims to facilitate access to key concepts, code examples, and practical solutions through a clear and well-structured format. The platform will serve as a reference repository for students and professionals, enabling quick information retrieval and collaboration in content improvement.'
                            children1={
                                <a className='link' 
                                    href='https://uned-house.vercel.app' 
                                    target='_blanck'><Link />
                                </a>
                            }>
                        </CardProject>
                    </section>
                    <Title tag='contact' title='Contact Me' subTitle='If you arrive so here, contact with me, always available to make projects, any type project that you think, I could help you.' />
                    <Contact />
                    
                    <footer></footer>
                </div>
            </div>
        </div>
    )
}