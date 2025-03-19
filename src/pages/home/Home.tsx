import { About } from '@/components/About'
import { CardProject } from '@/components/cards/CardProject'
import { CardText } from '@/components/cards/CardText'
import { Title } from '@/components/recycle/HeaderTitle'
import { Footer } from '@/components/recycle/Footer'
import { Nav } from '@/components/Nav'
import { Download } from '@/components/icons/HeroIcons'

export function Home() {
    return (
        <main>
            <Nav />
            <div className='container-home'>
                <img className='float-svg svg-1' src='/World.svg' alt='World map svg background' />
                <img className='float-svg svg-2' src='/World.svg' alt='World map svg background' />
                <img className='float-svg svg-3' src='/World.svg' alt='World map svg background' />
                <img className='float-svg svg-4' src='/World.svg' alt='World map svg background' />

                <div className='flurry-left'></div>
                <div className='scroll-sec'>
                    <About />
                    <Title title='Experience' subTitle='A showcase of my professional journey, highlighting key achievements and expertise in cybersecurity, CTF challenges, and offensive security' />
                    <div className='experience'>
                        <CardText 
                            title='Volunteer NicaSecurity (Oct 2024...)'
                            text='I am part of the community contributing to the development of web tools and the creation of CTF challenges, with the aim of supporting learning and cybersecurity. Teamwork to design interactive content that fosters a collaborative space, where participants can improve their technical skills.'>
                        </CardText>
                        <CardText 
                            title='Web Developer (Feb 2022 - Mar 2022)'
                            text='I designed and developed a website that met the specific requirements of the client, ensuring that every aspect of design and functionality was aligned with their commercial needs and objectives. In addition, I optimized site performance to ensure fast charge and efficient user experience.'>
                        </CardText>
                    </div>
                
                    <Title title='Services' subTitle='My journey in cybersecurity and web development-building secure, high-performance applications while tackling complex security challenges' />
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

                    <Title title='Projects' subTitle='A selection of my most impactful projects, showcasing my expertise in web development and cybersecurity, not all (only I considered most relevant)' />
                    <div className='projects'>
                        <CardProject 
                            className='cardProject-1'
                            title='GrizzlySpark (web app)'
                            text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                            children1={
                                <><a className='link'>In process</a>
                                <a className='link' href='http://grizzlyspark.runasp.net' target='_blanck'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-2'
                            title='Custom Timer (web page)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children1={
                                <><a className='link'>Finished</a>
                                <a className='link' href='https://github.com/Yoswell/Custom_Timer' target='_black'>Repo</a>
                                <a className='link' href='https://yoswell.github.io/Custom_Timer/' target='_black'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-3'
                            title='Clon Microsoft Learn (web app)'
                            text='This project, as shown in the image, is an almost exact replica of a specific page of the Microsoft Learn platform. Its purpose is to serve as a visual and structural clone of the user interface of that page. It is designed only for the border, which means that it is limited to the graphic representation and the visual structure of the original page, not including the functionality or dynamic interaction that characterizes the real version of the platform.'
                            children1={
                                <><a className='link'>Finished</a>
                                <a className='link' href='https://github.com/Yoswell/Clone_Microsoft_Learn' target='_black'>Repo</a>
                                <a className='link' href='https://clone-microsoft-learn.vercel.app' target='_blanck'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-4'
                            title='Devhouse (web app)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children1={
                                <a className='link'>In process</a>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-5'
                            title='GrizzlySpark (hacking tool)'
                            text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                            children1={
                                <><a className='link'>In process</a>
                                <a className='link' href='http://grizzlyspark.runasp.net' target='_blanck'>Demo</a></>
                            }>
                        </CardProject>
                        <CardProject 
                            className='cardProject-6'
                            title='Unedlance (web app)'
                            text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                            children1={
                                <><a className='link'>In process</a>
                                <a className='link' href='http://grizzlyspark.runasp.net' target='_blanck'>Demo</a></>
                            }>
                        </CardProject>
                    </div>

                    <Title title='Extra' subTitle='Here the are mor projects, but in this case, are projects related with Cybersecirity' />
                    <section className='skill-sec'>
                        <h1 className='title'>Download GryzzlySpark</h1>
                        <div className='cont-big-button'>
                            <a className='link active' href='https://github.com/Yoswell/GrizzlySpark' target='_blanck'>
                                <Download />
                                Download GS.py
                            </a>
                        </div>
                        {/* ----------------- */}
                        <div className='project-image project-image-1'>
                            <img src='/1.png' loading='lazy' alt='Project image banner' />
                        </div>
                        <div className='project-image project-image-2'>
                            <img src='/2.jpg' loading='lazy' alt='Project image banner' />
                        </div>
                    </section>

                    <Title title='Contact me' subTitle='If you arrive so here, contact with me, always available to make projects, any type project that you think, I could help you' />
                    <Footer/>
                </div>
                <div className='flurry-right'></div>
            </div>
        </main>
    )
}