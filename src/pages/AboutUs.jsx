import '../AboutUs.css'
import '../MainPage.css'
import { useState } from 'react'

const AboutUs = () => {

    const [pictures, setPictures] = useState([
        {link: 'https://i.imgur.com/IgcvMbF.jpg', date: 'CHRISTMAS EVE!'},
        {link: 'https://i.imgur.com/C8QngZ4.jpg', date: 'HALLOWEEN!'},
        {link: 'https://i.imgur.com/QpHhStI.jpg', date: "SHANE'S GRAD PARTY!"},
        {link: 'https://i.imgur.com/kLF6585.jpg', date: "NEW YEAR!"},
        {link: 'https://i.imgur.com/Ht5ujLo.jpg', date: "MOVIE DATE!"},
        {link: 'https://i.imgur.com/eHik3je.jpg', date: "LOG RIDE AT DISNEYLAND!"},
        {link: 'https://i.imgur.com/pxFvdr2.jpg', date: "MATTERHORN AT DISNEYLAND!"},
        {link: 'https://i.imgur.com/TLYyIMc.jpg', date: "MARVEL STORE AT DISNEYLAND!"},
        {link: 'https://i.imgur.com/7xGaGQR.jpg', date: "US TRYING TO TAKE CUTE PICS"}
    ])
    let [index, setIndex] = useState(0)

    const nextButton = () => {
		setIndex(index === pictures.length - 1 ? 0 : index + 1)
	}

    console.log(pictures)

    return (
        <div className="about-title">
            <h1>About us</h1>
            <button id='next' onClick={nextButton}>Next Memory</button>
            <h2>{pictures[index].date}</h2>
            <p><img className='photo-slide' onClick={nextButton} src={pictures[index].link} alt="friend photo" /></p>
        </div>
    )
}

export default AboutUs;