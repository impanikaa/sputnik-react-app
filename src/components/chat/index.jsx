import { useState } from 'react';
import styles from './style.module.css'
import ChatBlock from './Chat-block';
import Comment from './Comment';
import { useLocalStorage } from '../../hook/useLocalstorage';

const Chat = () => {
    const [chatData, setChatData] = useLocalStorage('CHAT', [])
    const [inputValue, setInputValue] = useState('')
    const [showDialogReg, setshowDialogReg] = useState(false);

    const [user] = useLocalStorage('USER')

    console.log(chatData);

    const sendMessage= () => {
        if(user) {
            setChatData([...chatData, `${user}: ${inputValue}`]);
            setInputValue('')
        } else{
            setshowDialogReg(true)
            setInputValue('')
        }
        
    };

    return(
        <div className={styles.container}>
            <ChatBlock chatData={chatData}></ChatBlock>
            <Comment 
            inputValue={inputValue}
            setInputValue={setInputValue}
            setChatData={setChatData}
            sendMessage={sendMessage}
            showDialogReg={showDialogReg}
            ></Comment>
        </div>
    )
}


export default Chat;