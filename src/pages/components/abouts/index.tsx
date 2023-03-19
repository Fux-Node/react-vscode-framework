import React from 'react'
import "@styles/about.css"
import sd from "@src/constants/web/sd.png"
import linkedin from "@src/constants/web/buttons/linkedin.png"
import youtube from "@src/constants/web/buttons/youtube.png"
import discord from "@src/constants/web/buttons/discord.png"
import github from "@src/constants/web/buttons/github.png"
import twitter from "@src/constants/web/buttons/twitter.png"
import { openWeb } from '@src/global/middlewares/w2e'

const SubAbout = () => {
    const detail = [
        {
            image: linkedin,
            url: "https://www.linkedin.com/in/narkreeta/"
        },
        {
            image: youtube,
            url: "https://www.youtube.com/channel/UClqkweaAkQhKTJKWDS3Tlnw"
        },
        {
            image: discord,
            url: "https://discord.gg/hACSzssXYy"
        },
        {
            image: github,
            url: "https://github.com/narkreeta"
        },
        {
            image: twitter,
            url: "https://twitter.com/narkreeta"
        }
    ]
    return (
        <div className='container-about'>
            <img src={sd} className='profile' />
            <h2 className='profile-name'>Sailendra Dash</h2>
            <div className='description'>
                <h4 className='header'>Introduction:</h4>
                <p className='para'>Hi Its me sailendra Dash, I am a versatile developer who can take on any project with confidence. particularly passionate about working with TypeScript and Python, and have demonstrated a high level of proficiency in these languages. With extensive experience in developing software applications, I am an asset to any team, bringing a deep understanding of coding best practices, software architecture, and database design. My dedication to staying up-to-date with the latest technologies and tools makes me a valuable resource for any organization seeking a skilled and adaptable developer.</p>
            </div>
            <div className='social'>
                <h4 className='header'>Social:</h4>
                <div className='social-group'>
                    {detail.map((item, index) => {
                        return (
                            <div key={index} onClick={() => openWeb(item.url)}>
                                <img src={item.image} style={{ width: "80px" }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SubAbout;