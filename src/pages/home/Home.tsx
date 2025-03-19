import { About } from '@/components/About'
import { CardProject } from '@/components/cards/CardProject'
import { CardText } from '@/components/cards/CardText'
import { Title } from '@/components/recycle/HeaderTitle'
import { Footer } from '@/components/recycle/Footer'
import { Nav } from '@/components/Nav'

export function Home() {
    return (
        <main>
            <Nav />
            <div className='container-home'>
                <img className='float-svg svg-1' src='/World.svg' alt='World map svg background' />
                <img className='float-svg svg-2' src='/World.svg' alt='World map svg background' />
                <img className='float-svg svg-3' src='/World.svg' alt='World map svg background' />
                <img className='float-svg svg-4' src='/World.svg' alt='World map svg background' />
                <img className='float-svg svg-5' src='/World.svg' alt='World map svg background' />

                <div className='flurry-left'></div>
                <div className='scroll-sec'>
                    <About />
                    <Title title='< Experience />' subTitle='A showcase of my professional journey, highlighting key achievements and expertise in cybersecurity, CTF challenges, and offensive security.' />
                    <div className='experience'>
                        <article className='card card-experience'>
                            <div className='cont-text'>
                                <h3 className='title'>Cibersecuirty Volunteer NicaSecurity</h3>
                                <h4>Community NicaSecurity</h4>
                                <h6>Oct 2024 - Present</h6>
                            </div>
                            <p>I am part of the community contributing to the development of web tools and the creation of CTF challenges, with the aim of supporting learning and cybersecurity. Teamwork to design interactive content that fosters a collaborative space, where participants can improve their technical skills.</p>
                        </article>
                        <article className='card card-experience'>
                            <div className='cont-text'>
                                <h3 className='title'>Freelance Web Developer</h3>
                                <h4>LARA'S Barbershop</h4>
                                <h6>Feb 2022 - Mar 2022</h6>
                            </div>
                            <p>I designed and developed a website that met the specific requirements of the client, ensuring that every aspect of design and functionality was aligned with their commercial needs and objectives. In addition, I optimized site performance to ensure fast charge and efficient user experience.</p>
                        </article>
                    </div>
                
                    <Title title='< Services />' subTitle='My journey in cybersecurity and web development-building secure, high-performance applications while tackling complex security challenges.' />
                    <div className='service'>
                        <CardText 
                            title='University Works'
                            text='I offer assistance and support in carrying out university projects related to computer science. From in-depth research to structured writing, I can help you achieve your academic goals with quality, precision, and a well-organized approach that ensures clarity and professionalism.'>
                        </CardText>
                        <CardText 
                            title='Web Development'
                            text='High-quality web development tailored to your specific needs. From the creation of static websites to dynamic web applications, I can help you build a robust, scalable, and visually appealing online presence that enhances engagement and drives your success.'>
                        </CardText>
                        <CardText 
                            title='Training and Virtual Sessions'
                            text='I offer personalized classes in computer science and cybersecurity. From fundamental concepts to advanced techniques, I help students, professionals, and corporate teams enhance their skills and deepen their knowledge with practical, hands-on learning.'>
                        </CardText>
                        <CardText 
                            title='Software Development'
                            text='Custom software development tailored to your business needs. From desktop applications to complex enterprise solutions, I provide innovative, scalable, and efficient technologies that enhance productivity, streamline operations, and drive long-term growth.'>
                        </CardText>
                        <CardText 
                            title='Mobile App Development'
                            text='I specialize in creating mobile applications for iOS and Android platforms. Whether you need a user-friendly app for your business or a custom solution for your specific requirements, I deliver high-performance, intuitive, and visually appealing apps that meet your goals.'>
                        </CardText>
                        <CardText 
                            title='Cybersecurity Consulting'
                            text='I provide expert cybersecurity consulting to protect your digital assets and ensure the integrity of your systems. From vulnerability assessments to implementing robust security measures, I help you safeguard your data and maintain compliance with industry standards.'>
                        </CardText>
                    </div>

                    <Title title='< Projects />' subTitle='A selection of my most impactful projects, showcasing my expertise in web development and cybersecurity, not all (only I considered most relevant).' />
                    <div className='projects'>
                        <CardProject 
                            className='cardProject-1'
                            title='GrizzlySpark (web app)'
                            text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                            children1={
                                <><a className='link link-tag'>In process</a>
                                <a className='link' href='http://grizzlyspark.runasp.net' target='_blanck'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-2'
                            title='Custom Timer (web page)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children1={
                                <><a className='link link-tag'>Finished</a>
                                <a className='link' href='https://github.com/Yoswell/Custom_Timer' target='_black'>Repo</a>
                                <a className='link' href='https://yoswell.github.io/Custom_Timer/' target='_black'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-3'
                            title='Clon Microsoft Learn (web app)'
                            text='This project, as shown in the image, is an almost exact replica of a specific page of the Microsoft Learn platform. Its purpose is to serve as a visual and structural clone of the user interface of that page. It is designed only for the border, which means that it is limited to the graphic representation and the visual structure of the original page, not including the functionality or dynamic interaction that characterizes the real version of the platform.'
                            children1={
                                <><a className='link link-tag'>Finished</a>
                                <a className='link' href='https://github.com/Yoswell/Clone_Microsoft_Learn' target='_black'>Repo</a>
                                <a className='link' href='https://clone-microsoft-learn.vercel.app' target='_blanck'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-4'
                            title='Devhouse (web app)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children1={
                                <a className='link link-tag'>In process</a>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-5'
                            title='GrizzlySpark (hacking tool)'
                            text='A powerful and versatile tool written in Python, specifically designed to assist CTF (Capture The Flag) participants in tackling a wide range of cybersecurity challenges. This tool offers several essential functionalities that streamline data analysis, cryptographic decoding, and manipulation of encoded or obfuscated information. By automating tedious tasks and providing intuitive features, it allows users to concentrate on the core problem-solving aspects of each challenge, enhancing efficiency and accuracy in CTF competitions.'
                            children1={
                                <><a className='link link-tag'>In process, I need to make a deploy</a>
                                <a className='link' href='#' target='_blanck'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-6'
                            title='Unedlance (web app)'
                            text='A technical documentation system designed to organize and centralize knowledge acquired from university courses, with a focus on cybersecurity, programming, and forensic analysis. This project aims to facilitate access to key concepts, code examples, and practical solutions through a clear and well-structured format. The platform will serve as a reference repository for students and professionals, enabling quick information retrieval and collaboration in content improvement.'
                            children1={
                                <><a className='link link-tag'>In process</a>
                                <a className='link' href='https://github.com/Yoswell/GrizzlySpark' target='_blanck'>Repo</a></>
                            }>
                        </CardProject>
                    </div>

                    <Title title='< Hacking />' subTitle='Here are more projects, but in this case, they are specifically related to cybersecurity. These projects focus on different areas within the field, such as network security, ethical hacking, and data protection.' />
                    <section className='skill-sec'>
                        <div className='code-terminal'>
                            <img src='/Gs.png' alt='Logo for the hacking tool' />
                            <pre>
                                <code>
                                    ~ ❯ grizzlySpark -mE5 -i'Yoswel'
                                    <br></br>
                                    [↙] Uploading: 343
                                    <br></br>
                                    <br></br>
                                    💀 Wordlist generada y guardada en 'dictionary.txt' con 17,408 palabras.
                                    <br></br>
                                    <br></br>
                                    ~ ❯ grizzlySpark -mD1 -i'6sJohm2dXR3G6a'
                                    <br></br>
                                    [↙] Uploading: 343
                                    <br></br>
                                    <br></br>
                                    💀 Base58: hola mundo
                                </code>
                            </pre>
                        </div>
                        {/* ----------------- */}
                        <div className='project-image project-image-1'>
                            <img src='/1.png' loading='lazy' alt='Project image banner' />
                        </div>
                        <div className='project-image project-image-2'>
                            <img src='/2.jpg' loading='lazy' alt='Project image banner' />
                        </div>
                    </section>

                    <Title title='< Contact me />' subTitle='If you arrive so here, contact with me, always available to make projects, any type project that you think, I could help you' />
                    <Footer/>
                </div>
                <div className='flurry-right'></div>
            </div>
        </main>
    )
}