import './ColorizedButton.scss';

type Props = {
    title: string;
    subtitle?: number;
    backgroundColor: string;
}

const ColorizedButton = (props: Props) => {
    return(
    <div className="colorized-button" style={{backgroundColor: `${props.backgroundColor}`}}>
            <p className='title'>
                {props.title}
            </p>
            <p className='subtitle'>
                {props.subtitle || ''}
            </p>   
        </div>
    )
}

export default ColorizedButton;