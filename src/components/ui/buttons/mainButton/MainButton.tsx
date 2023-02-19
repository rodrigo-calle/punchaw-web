import './MainButton.scss';

type Props = {
    title: string;
    uppercase?: boolean;
}
const MainButton = (props: Props) => {
    const text = props.uppercase === false ? props.title : props.title.toUpperCase();
    return(
        <button className="main-button">
            {text}
        </button>
    )
}
export default MainButton;