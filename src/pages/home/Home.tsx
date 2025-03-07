import { About } from '@/components/About'
import { CardProject } from '@/components/cards/CardProject'
import { CardText } from '@/components/cards/CardText'
import { Skills } from '@/components/cards/Skills'
import { Title } from '@/components/recycle/HeaderTitle'
import { Footer } from '@/components/recycle/Footer'
import { Code } from '@/components/recycle/Code'
import { Grid } from '@/components/recycle/Grid'

export function Home() {
    return (
        <main>
            <div className='container-home'>
                <div className='flurry-left'></div>
                <div className='flurry-right'></div>

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
            
                <section className='navigate' id="service"></section>
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
                </div>

                <Title title='Projects' subTitle='A selection of my most impactful projects, showcasing my expertise in web development and cybersecurity, not all (only I considered most relevant)' />
                <div className='projects'>
                    <CardProject 
                        url='/GSpark2.jpg'
                        title='GrizzlySpark (web app)'
                        text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                        children1={
                            <><a className='link'>In process</a>
                            <a className='link' href='http://grizzlyspark.runasp.net' target='_blanck'>Demo</a></>
                        }
                        children2={
                            <><img src='https://skillicons.dev/icons?i=cs' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=dotnet' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=html' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=css' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=js' alt='Skill icon image'></img></>
                        }>
                    </CardProject>
                    <CardProject 
                        url='/CTimer.jpg'
                        title='Custom Timer (web page)'
                        text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                        children1={
                            <><a className='link'>Finished</a>
                            <a className='link' href='https://github.com/Yoswell/Custom_Timer' target='_black'>Repo</a>
                            <a className='link' href='https://yoswell.github.io/Custom_Timer/' target='_black'>Demo</a></>
                        }
                        children2={
                            <><img src='https://skillicons.dev/icons?i=html' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=css' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=js' alt='Skill icon image'></img></>
                        }>
                    </CardProject>
                    <CardProject 
                        url='/MLearn.jpg'
                        title='Clon Microsoft Learn (web app)'
                        text='This project, as shown in the image, is an almost exact replica of a specific page of the Microsoft Learn platform. Its purpose is to serve as a visual and structural clone of the user interface of that page. It is designed only for the border, which means that it is limited to the graphic representation and the visual structure of the original page, not including the functionality or dynamic interaction that characterizes the real version of the platform.'
                        children1={
                            <><a className='link'>Finished</a>
                            <a className='link' href='https://github.com/Yoswell/Clone_Microsoft_Learn' target='_black'>Repo</a>
                            <a className='link' href='https://clone-microsoft-learn.vercel.app' target='_blanck'>Demo</a></>
                        }
                        children2={
                            <><img src='https://skillicons.dev/icons?i=react' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=html' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=css' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=js' alt='Skill icon image'></img></>
                        }>
                    </CardProject>
                    <CardProject 
                        url='/DHouse.png'
                        title='Devhouse (web app)'
                        text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                        children1={
                            <a className='link'>In process</a>
                        }
                        children2={
                            <><img src='https://skillicons.dev/icons?i=cs' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=dotnet' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=html' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=css' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=js' alt='Skill icon image'></img></>
                        }>
                    </CardProject>
                    <CardProject 
                        url='/DTech.jpg'
                        title='Dragon Tech (web page)'
                        text='Dragon Tech is a platform that simulates an eCommerce specialized in PC components, offering a fluid and intuitive shopping experience. It features a shopping cart system, as well as well-organized sections for different types of hardware, allowing users to easily browse and select the products they need.'
                        children1={
                            <><a className='link'>Finished</a>
                            <a className='link' href='https://github.com/Yoswell/Ecommerce' target='_black'>Repo</a>
                            <a className='link' href='https://yoswell.github.io/Ecommerce/dmlzaG9rQ1RGezVoMHJ0M24zZF9sMW5rNV80cjNfaDB3X3QwX240djFnNHQzX2JsMW5kbDR9.html' target='_black'>Demo</a></>
                        }
                        children2={
                            <><img src='https://skillicons.dev/icons?i=html' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=css' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=js' alt='Skill icon image'></img></>
                        }>
                    </CardProject>
                    <CardProject 
                        url='/RDev.webp'
                        title='Clon React Dev (web app)'
                        text='This project, as shown in the image, is an almost exact replica of a specific page on the React Dev platform. Its purpose is to serve as a visual and structural clone of the said page is user interface. It is designed solely for the frontend, meaning that it is limited to the graphical representation and visual structure of the original page, without including the functionality or dynamic interaction that characterizes the real version of the platform.'
                        children1={
                            <><a className='link'>Finished</a>
                            <a className='link' href='https://github.com/Yoswell/Clone_ReactDev' target='_black'>Repo</a>
                            <a className='link' href='https://clone-react-dev.vercel.app' target='_blanck'>Demo</a></>
                        }
                        children2={
                            <><img src='https://skillicons.dev/icons?i=react' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=html' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=css' alt='Skill icon image'></img>
                            <img src='https://skillicons.dev/icons?i=js' alt='Skill icon image'></img></>
                        }>
                    </CardProject>
                </div>

                <Title title='My tech stack' subTitle='Over time, I have explored and worked with various technologies, but I have decided to highlight only those in which I have a strong command' />
                <Skills />

                <Title title='Extra' subTitle='Discover my bigger project in Cibersecurity, prove it and told me, what do you think about the tool, anything like bugs, problems, dependency problems, incorrect names...' />
                <section className='extra' id='extra'>
                    <Grid />
                    <div className='cont-text'>
                        <img className='Me' src='/GrizzlyS.png' alt='Me image' />
                        <h1>GrizzlyS</h1>
                        <p>A powerful tool written in Python designed to assist CTF (Capture The Flag) participants in solving cybersecurity challenges. This tool provides several useful functionalities that facilitate data analysis and manipulation, allowing users to focus on solving the challenges</p>
                    </div>
                    <Code />
                </section>
            </div>

            <Title title='Contact me' subTitle='If you arrive so here, contact with me, always available to make projects, any type project that you think, I could help you' />
            <section className='contact'>

            </section>
            
            <Footer/>
        </main>
    )
}