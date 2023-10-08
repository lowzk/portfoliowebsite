import './notepad.css';
import redpin from '../public/red_pin.png'
import Image from 'next/image';

interface NotePadProps {
    children: React.ReactNode;
}

function NotePad({children}: NotePadProps) {
    return (
        <div className='container relative' style={{ width: '45%', height: '100%' }}>
            <div className='note-pad' style={{ width: '100%', height: '100%' }}>
                <p>{children}</p>
            </div>
            <Image                
                src={redpin}
                alt="red pin"
                width={40}
                height={40}
                className="absolute top-0 left-0"
            />
            <Image                
                src={redpin}
                alt="red pin"
                width={40}
                height={40}
                className="absolute bottom-0 right-0"
            />
        </div>
    )
}

export default NotePad;