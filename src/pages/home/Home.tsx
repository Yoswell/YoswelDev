import { About } from '@/components/About'
import { CardProject } from '@/components/CardProject'
import { CardText } from '@/components/recycle/CardText'
import { Skills } from '@/components/skills'
import { Title } from '@/components/recycle/Title'
import { FloatButtons } from '@/components/recycle/FloatButtons'
import { Footer } from '@/components/recycle/Footer'
import { CardAudio } from '@/components/CardAudio'
import { Potion, Rocket, Service } from '@/components/icons/HeroIcons'

export function Home() {
    return (
        <main>
            <div className='container-home'>
                <section id='home'></section>
                <About />

                <section className='audio-cont'>
                    <CardAudio 
                        music='/src/assets/Arms.m4a'
                        title='Arms around you'
                        author='XXXTentationXXX'>
                    </CardAudio>
                    <CardAudio
                        music='/src/assets/Write.m4a'
                        title='Write This Down'
                        author='50 cent, Drake'>
                    </CardAudio>
                    <CardAudio
                        music='/src/assets/Maqui.m4a'
                        title='Maquiavelico'
                        author='Cancerbero'>
                    </CardAudio>
                    <CardAudio
                        music='/src/assets/Sunflower.m4a'
                        title='Sunflower'
                        author='Post Malone'>
                    </CardAudio>
                </section>

                <section className='navigate' id="experience"></section>
                <Title title='Experience' subTitle='Then I present my experience work' />
                <div className='experience'>
                    <span className='float-word'>Technology lover</span>
                    <div className='column-2'>
                        <div className='float-icon-right'>
                            <Potion/>
                        </div>
                        <CardText 
                            title='Volunteer Nicasecurity (Oct 2024 - Present)'
                            text='I am part of the community contributing to the development of web tools and the creation of CTF challenges, with the aim of supporting learning and cybersecurity. Teamwork to design interactive content that fosters a collaborative space, where participants can improve their technical skills and face challenging challenges.'>
                        </CardText>
                        <CardText 
                            title='Web Developer (Feb 2022 - Mar 2022)'
                            text='I designed and developed a website that met the specific requirements of the client, ensuring that every aspect of design and functionality was aligned with their commercial needs and objectives. In addition, I optimized site performance to ensure fast charge and efficient user experience.'>
                        </CardText>
                    </div>
                </div>

                <section className='navigate' id="service"></section>
                <Title title='Services' subTitle='Here are some of the services that I offer' />
                <div className='service'>
                    <span className='float-word'>Futbool lover</span>
                    <div className='column-2'>
                        <div className='float-icon-left'>
                            <Service/>
                        </div>
                        <CardText 
                            title='University Works'
                            text='I offer assistance and support in carrying out university works related to computer science. From the investigation to the writing, I can Help you achieve your academic goals with quality and precision.'>
                        </CardText>
                        <CardText 
                            title='Web Development'
                            text='High quality web development adapted to your specifications. From The creation of static websites to dynamic web applications, I can help you Build a robust and scalable online presence that drives your success on the web.'>
                        </CardText>
                        <CardText 
                            title='Training and Virtual Sessions'
                            text='I offer personalized classes in computer science and cybersecurity. Take yourself from the Fundamentals even advanced techniques for students, professionals and corporate teams that seek to improve their skills and knowledge.'>
                        </CardText>
                        <CardText 
                            title='Software Development'
                            text='Custom software development to meet your needs Business From desktop applications to business solutions complex, I am here to offer you innovative solutions that promote the Growth of your business.'>
                        </CardText>
                    </div>
                </div>

                <section className='navigate' id="projects"></section>
                <Title title='Projects' subTitle='Here are a few projects, not all (only I considered most relevant)' />
                <div className='projects'>
                    <span className='float-word'>Game lover</span>
                    <div className='column-2'>
                        <div className='float-icon-right'>
                            <Rocket/>
                        </div>
                        <CardProject 
                            url='/GSpark.png'
                            title='GrizzlySpark (web app)'
                            text='Grizzlyspark is an online web platform specially designed for the creation, accommodation and management of CTF challenges (capture the flag) focused on cybersecurity and ethical hacking. The platform allows users both to create their own personalized challenges and participate in existing challenges, facilitating practical learning and skills improvement In key areas of computer security.'
                            children={
                                <a className='skill'>In process</a>
                            }>
                        </CardProject>
                        <CardProject 
                            url='/CTimer.jpg'
                            title='Custom Timer (web page)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children={
                                <>
                                <a className='skill'>Finished</a>
                                <a className='skill' href='https://github.com/Yoswell/Custom_Timer' target='_black'>Repo</a>
                                <a className='skill' href='https://yoswell.github.io/Custom_Timer/' target='_black'>Demo</a>
                                </>
                            }>
                        </CardProject>
                        <CardProject 
                            url='/MLearn.jpg'
                            title='Clon Microsoft Learn (web app)'
                            text='This project, as shown in the image, is an almost exact replica of a specific page of the Microsoft Learn platform. Its purpose is to serve as a visual and structural clone of the user interface of that page. It is designed only for the border, which means that it is limited to the graphic representation and the visual structure of the original page, not including the functionality or dynamic interaction that characterizes the real version of the platform.'
                            children={
                                <>
                                <a className='skill'>Finished</a>
                                <a className='skill' href='https://github.com/Yoswell/Clone_Microsoft_Learn' target='_black'>Repo</a>
                                </>
                            }>
                        </CardProject>
                        <CardProject 
                            url='/DHouse.png'
                            title='Devhouse (web app)'
                            text='Devhouse is a non -profit initiative designed to help young developers and apprentices to acquire experience in the real world through The collaboration in practical projects that simulate a professional work environment. Participants perform tasks, attend meetings and use tools Industry standard, everything while receiving mentors guidance and improves their skills in a collaborative and support environment.'
                            children={
                                <a className='skill'>In process</a>
                            }>
                        </CardProject>
                        <CardProject 
                            url='/DTech.jpg'
                            title='Dragon Tech (web page)'
                            text='Dragon Tech is a platform that simulates an eCommerce specialized in PC components, offering a fluid and intuitive shopping experience. It features a shopping cart system, as well as well-organized sections for different types of hardware, allowing users to easily browse and select the products they need.'
                            children={
                                <>
                                <a className='skill'>Finished</a>
                                <a className='skill' href='https://github.com/Yoswell/Ecommerce' target='_black'>Repo</a>
                                <a className='skill' href='https://yoswell.github.io/Ecommerce/dmlzaG9rQ1RGezVoMHJ0M24zZF9sMW5rNV80cjNfaDB3X3QwX240djFnNHQzX2JsMW5kbDR9.html' target='_black'>Demo</a>
                                </>
                            }>
                        </CardProject>
                        <CardProject 
                            url='/MPoint.png'
                            title='Dragon Tech (web page)'
                            text='MedPoint is a web application designed to meet the needs of a clinic, offering a comprehensive and easy-to-use system. Its functionalities include login for patients, employees and administrators, patient and doctor management, consultation visualization, interactive dashboards and billing of services. In addition, it has a modern and user-friendly design for a better user experience.'
                            children={
                                <a className='skill'>In process</a>
                            }>
                        </CardProject>
                    </div>
                </div>

                <section className='navigate' id="stack"></section>
                <Title title='My tech stack' subTitle='Here are some of the technologies that I now' />
                <Skills />
                
                <section className='navigate' id="extras"></section>
                <Title title='Extras' subTitle='Here there are more projects, in this case, projects related to Cibersecurity' />
                <div className='extras'>
                    <span className='float-word'>Music lover</span>
                    <div className='column-2'>
                        <div className='float-icon-right'>
                            <Rocket/>
                        </div>
                        <CardProject 
                            url='/MLearn.png'
                            title='GrizzlySpark Tool'
                            text='A powerful tool written in Python designed to assist CTF (Capture The Flag) participants in solving cybersecurity challenges. This tool provides several useful functionalities that facilitate data analysis and manipulation, allowing users to focus on solving the challenges.'
                            children={
                                <>
                                <a className='skill' target='_blanck' href='https://github.com/Yoswell/GrizzlySpark'>Repo</a>
                                </>
                            }>
                        </CardProject>
                        <CardProject 
                            url='/MLearn.png'
                            title='Lets Defend Alert Writeups'
                            text='Welcome to the Lets Defend Alerts Reviews Repository, your one-stop destination for detailed, insightful, and practical guides on how to address various alerts within the Lets Defend platform. It is currently under development but I hope to have more resolutions soon.'
                            children={
                                <>
                                <a className='skill' target='_blanck' href='https://github.com/Yoswell/LetsDefend-Alerts'>Repo</a>
                                </>
                            }>
                        </CardProject>
                    </div>
                </div>
                
                <Footer/>
            </div>

            <FloatButtons/>
        </main>
    )
}