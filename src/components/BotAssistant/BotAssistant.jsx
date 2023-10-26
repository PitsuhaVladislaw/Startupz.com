import './BotAssistant.css'

import Bot from '../../assets/icon/assistant.png'
import Block1 from '../../assets/img/Rectangle 52.png'
import Block2 from '../../assets/img/Rectangle 51.png'

import { CloseButton } from 'react-bootstrap'

export default function BotAssistant() {
    const message = document.getElementById('message')

    function showBlock() {
        message.style.display = 'flex';
    }

    function closeBlock() {
        message.style.display = 'none';
    }

    return(
        <div className='assistant'>
            <div style={{display: 'none'}} id='message' className='mes-block'>
                <div className='message'>
                    <p>
                        Hi! I am Ben, your virtual assistant. <br />
                        How can I make your day better?
                    </p>
                </div>
                <CloseButton onClick={closeBlock} />
            </div>
            <div className='bot' onMouseEnter={showBlock}>
                <div className='bot-body'>
                    <div className='bot-icon'>
                        <img src={Bot} alt="assistant" />
                        <img className='blc' src={Block1} alt="block1" />
                        <img style={{bottom: '0'}} className='blc' src={Block2} alt="block2" />
                    </div>
                </div>
            </div>
        </div>
    )
}