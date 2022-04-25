import '../AboutUs.css'
import '../MainPage.css'
import { useState } from 'react'

const AboutUs = () => {

    const [pictures, setPictures] = useState([
        { link: '/Comp.mp4', date: "FUNNY" },
        { link: 'https://i.imgur.com/7xGaGQR.jpg', date: "US TRYING TO TAKE CUTE PICS" },
        { link: 'https://i.imgur.com/IgcvMbF.jpg', date: 'CHRISTMAS EVE!' },
        { link: 'https://i.imgur.com/C8QngZ4.jpg', date: 'HALLOWEEN!' },
        { link: 'https://i.imgur.com/QpHhStI.jpg', date: "SHANE'S GRAD PARTY!" },
        { link: 'https://i.imgur.com/kLF6585.jpg', date: "NEW YEAR!" },
        { link: 'https://i.imgur.com/Ht5ujLo.jpg', date: "MOVIE DATE!" },
        { link: 'https://i.imgur.com/eHik3je.jpg', date: "LOG RIDE AT DISNEYLAND!" },
        { link: 'https://i.imgur.com/pxFvdr2.jpg', date: "MATTERHORN AT DISNEYLAND!" },
        { link: 'https://i.imgur.com/TLYyIMc.jpg', date: "MARVEL STORE AT DISNEYLAND!" },
        { link: 'https://i.imgur.com/q0tlr0N.png', date: "WORKING OUT!" }
    ])
    let [index, setIndex] = useState(0)

    const imageTypes = ['jpg', 'png', 'gif']

    const nextButton = () => {
        setIndex(index === pictures.length - 1 ? 0 : ++index)
    }

    let currentDisplay;

    let displayMemory =
        imageTypes.includes(pictures[index].link.slice(-3)) ? currentDisplay = <p><img className='photo-slide' onClick={nextButton} src={pictures[index].link} alt="friend photo" /></p> : currentDisplay = <video className="clip" onClick={nextButton} width='600' height='350' controls>
            <source src={pictures[index].link} type="video/mp4" alt='friend video' />
        </video>

    return (
        <div className="about-title">
            <h1>Memories</h1>
            <button id='next' onClick={nextButton}>Next Memory</button>
            <br></br>
            {currentDisplay}
            {/* <h2 className='picture-text'>{pictures[index].date}</h2>
            <p><img className='photo-slide' onClick={nextButton} src={pictures[index].link} alt="friend photo" /></p> */}
        </div>
    )
}

export default AboutUs;