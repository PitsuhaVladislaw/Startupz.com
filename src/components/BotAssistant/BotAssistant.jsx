import './BotAssistant.css'

import Bot from '../../assets/icon/assistant.png'
import Block1 from '../../assets/img/Rectangle 52.png'
import Block2 from '../../assets/img/Rectangle 51.png'

import React, { useState, useEffect } from "react";
import { CloseButton } from 'react-bootstrap'

export default function BotAssistant() {
    const [isBlockVisible, setBlockVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBlockVisible(true);
        }, 7000);

        return () => clearTimeout(timer);
    }, []);

    const handleCrossClick = () => {
        setBlockVisible(false);
    };

    return(
        <div className='assistant'>
            {isBlockVisible && (
                <div id='message' className='mes-block'>
                    <div className='message'>
                        <p>
                            Hi! I am Ben, your virtual assistant. <br />
                            How can I make your day better?
                        </p>
                    </div>
                    <CloseButton onClick={handleCrossClick} />
                </div>
            )}
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