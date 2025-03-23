import { About } from '@/components/About'
import { CardProject } from '@/components/cards/CardProject'
import { CardText } from '@/components/cards/CardText'
import { Title } from '@/components/recycle/HeaderTitle'
import { Nav } from '@/components/Nav'
import { Contact } from '@/components/Contact'

export function Home() {
    return (
        <main>
            <Nav />
            <div className='container-home'>
                <div className='flurry-left'></div>
                <div className='scroll-sec'>
                    <About />
                    <Title title='Experience' subTitle='A showcase of my professional journey, highlighting key achievements and expertise in cybersecurity, CTF challenges, and offensive security.' />
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
                
                    <Title title='Services' subTitle='My journey in cybersecurity and web development-building secure, high-performance applications while tackling complex security challenges.' />
                    <div className='service'>
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
                    </div>
                    
                    <Title title='Projects' subTitle='A selection of my most impactful projects, showcasing my expertise in web development and cybersecurity, not all (only I considered most relevant).' />
                    <div className='projects'>
                        <CardProject 
                            className='cardProject-1'
                            title='GrizzlySpark (web app)'
                            text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                            children1={
                                <><a className='link link-tag'>In process</a>
                                <a className='link' href='http://grizzlyspark.runasp.net' target='_blanck'>Demo</a></>
                            }
                            children2={
                                <div className='show-project'>
                                    <article className='float-skill-ring'>
                                        <div className='skill skill-1 skill-color-1'>
                                            <img className='skill-image' src='/NET.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-2 skill-color-1'>
                                            <img className='skill-image' src='/CS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-3 skill-color-1'>
                                            <img className='skill-image' src='/JS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-4 skill-color-1'>
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-5 skill-color-1'>
                                            <img className='skill-image' src='/HTML.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-6 skill-color-1'>
                                            <img className='skill-image' src='/NET.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-7 skill-color-1'>
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                    </article>
                                </div>
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
                            }
                            children2={
                                <div className='show-project'>
                                    <article className='float-skill-ring'>
    
                                        <div className='skill skill-1 skill-color-2'>
                                            <img className='skill-image' src='/JS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-2 skill-color-2'>
                                            <img className='skill-image' src='/HTML.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-3 skill-color-2'>
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-4 skill-color-2'>
                                            <img className='skill-image' src='/JS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-5 skill-color-2'>
                                            <img className='skill-image' src='/HTML.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-6 skill-color-2'>
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-7 skill-color-2'>
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                    </article>
                                </div>
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
                            }
                            children2={
                                <div className='show-project'>
                                    <article className='float-skill-ring'>

                                        <div className='skill skill-1 skill-color-3'>
                                            <img className='skill-image' src='/React.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-2 skill-color-3'>
                                            <img className='skill-image' src='/JS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-3 skill-color-3'>
                                            <img className='skill-image' src='/HTML.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-4 skill-color-3'>
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-5 skill-color-3'>
                                            <img className='skill-image' src='/React.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-6 skill-color-3'>
                                            <img className='skill-image' src='/JS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-7 skill-color-3'>
                                            <img className='skill-image' src='/React.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                    </article>
                                </div>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-4'
                            title='Devhouse (web app)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children1={
                                <a className='link link-tag'>In process</a>
                            }
                            children2={
                                <div className='show-project'>
                                    <article className='float-skill-ring'>
                                        <div className='skill skill-1 skill-color-4'>
                                            <img className='skill-image' src='/JS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-2 skill-color-4'>
                                            <img className='skill-image' src='/TS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-3 skill-color-4'>
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-4 skill-color-4'>
                                            <img className='skill-image' src='/HTML.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-5 skill-color-4'>
                                            <img className='skill-image' src='/React.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-6 skill-color-4'>
                                            <img className='skill-image' src='/NET.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-7 skill-color-4'>
                                            <img className='skill-image' src='/CS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                    </article>
                                </div>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-5'
                            title='GrizzlySpark (hacking tool)'
                            text='A powerful and versatile tool written in Python, specifically designed to assist CTF (Capture The Flag) participants in tackling a wide range of cybersecurity challenges. This tool offers several essential functionalities that streamline data analysis, cryptographic decoding, and manipulation of encoded or obfuscated information. By automating tedious tasks and providing intuitive features, it allows users to concentrate on the core problem-solving aspects of each challenge, enhancing efficiency and accuracy in CTF competitions.'
                            children1={
                                <><a className='link link-tag'>Finished, frecuency added features</a>
                                <a className='link' href='https://github.com/Yoswell/GrizzlySpark' target='_blanck'>Repo</a></>
                            }
                            children2={
                                <div className='show-project'>
                                    <article className='float-skill-ring'>
                                        <div className='skill skill-1 skill-color-5'>
                                            <img className='skill-image' src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-2 skill-color-5'>
                                            <img className='skill-image' src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-3 skill-color-5'>
                                            <img className='skill-image' src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-4 skill-color-5'>
                                            <img className='skill-image' src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-5 skill-color-5'>
                                            <img className='skill-image' src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-6 skill-color-5'>
                                            <img className='skill-image' src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-7 skill-color-5'>
                                            <img className='skill-image' src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                    </article>
                                </div>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-6'
                            title='UnedHouse (web app)'
                            text='A technical documentation system designed to organize and centralize knowledge acquired from UNED university courses, with a focus on cybersecurity, programming. This project aims to facilitate access to key concepts, code examples, and practical solutions through a clear and well-structured format. The platform will serve as a reference repository for students and professionals, enabling quick information retrieval and collaboration in content improvement.'
                            children1={
                                <><a className='link link-tag'>In process</a>
                                <a className='link' href='https://uned-house.vercel.app' target='_blanck'>Demo</a></>
                            }
                            children2={
                                <div className='show-project'>
                                    <article className='float-skill-ring'>
                                        <div className='skill skill-1 skill-color-6'>
                                            <img className='skill-image' src='/TS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-2 skill-color-6'>    
                                            <img className='skill-image' src='/React.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-3 skill-color-6'>    
                                            <img className='skill-image' src='/JS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-4 skill-color-6'>    
                                            <img className='skill-image' src='/CSS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-5 skill-color-6'>    
                                            <img className='skill-image' src='/HTML.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-6 skill-color-6'>
                                            <img className='skill-image' src='/TS.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                        <div className='skill skill-7 skill-color-6'>    
                                            <img className='skill-image' src='/React.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                                        </div>
                                    </article>
                                </div>
                            }>
                        </CardProject>
                    </div>

                    <Title title='Hacking' subTitle='Here are more projects, but in this case, they are specifically related to cybersecurity. These projects focus on different areas within the field, such as network security, ethical hacking, and data protection.' />
                    <section className='skill-sec'>
                        <div className='skill-code skill-code-1'>    
                            <img src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                        </div>
                        <div className='code-terminal'>
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
                        <div className='skill-code skill-code-2'>    
                            <img src='/PY.svg' decoding='async' loading='lazy' alt='Skill that show how is built this projetc' />
                        </div>
                    </section>

                    <Title title='Contact Me' subTitle='If you arrive so here, contact with me, always available to make projects, any type project that you think, I could help you' />
                    <Contact />
                    
                    <footer></footer>
                </div>
                <div className='flurry-right'></div>
            </div>
        </main>
    )
}