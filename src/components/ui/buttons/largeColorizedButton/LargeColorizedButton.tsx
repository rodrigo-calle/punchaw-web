import './LargeColorizedButton.scss';

type Props = {
    title: string;
    backgroundColor: string;
}
const LargeColorizedButton = (props: Props) => {
    return(
        <div 
            className="large-c-button"
            style={{backgroundColor: `${props.backgroundColor}`}}
        >
            <h1 className="large-c-button__title">
                {
                    props.title.length>19?
                    props.title.slice(0, 20)+'...'
                    :
                    props.title
                }
            </h1>

        </div>
    )
}

export default LargeColorizedButton;