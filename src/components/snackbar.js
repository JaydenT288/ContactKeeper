import React, {useEffect , useState} from 'react';
import Emitter from './Emitter';
import './app.css'


const Snackbar = (props) =>{
    const [content,setContent] = useState('');
    useEffect(()=>{
        Emitter.on('app_message', ({payload})=>{
            setContent(payload);
        })
        
        //timer to clear content
        const timer = setTimeout(() => {
            setContent('');
        },2000)


        //clear out timer and turn eventEmitter off
        return() =>{
            Emitter.off()
            clearTimeout(timer)
        }

    })

    
    return content.length > 0 ? (
    <div className = "snackMessage">
        {content}
    </div>) : null;
}

export default Snackbar;