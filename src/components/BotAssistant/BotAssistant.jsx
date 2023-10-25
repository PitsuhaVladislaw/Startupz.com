import './BotAssistant.css'

import Bot from '../../assets/icon/assistant.png'
import Block1 from '../../assets/img/Rectangle 52.png'
import Block2 from '../../assets/img/Rectangle 51.png'

export default function BotAssistant() {
    return(
        <div className='assistant'>
            <div className='bot'>
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