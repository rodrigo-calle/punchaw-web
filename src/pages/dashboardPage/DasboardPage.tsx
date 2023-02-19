import ColorizedButton from '../../components/ui/buttons/colizedButton/ColorizedButton';
import './DashboardPage.scss';
const DashboardPage = () => {
    const data = {
        user: 'Rodrigo Calle',
        buttons: {
            buttonOne: {
                title: 'Registrar hábito'
            },
            buttonTwo: {
                title: 'Mis hábitos',
                subtitle: 2,
            },
            buttonThree: {
                title: '¿Que hice hoy?'
            }
        }
    }
    return(
        <div className='dashboard-page'>
            <h1 className='user-name'>
                {data.user}
            </h1>
            <div className="buttons-container">
                <ColorizedButton 
                    title={data.buttons.buttonOne.title}
                    backgroundColor="#BAE1FF"
                />
                <ColorizedButton 
                    title={data.buttons.buttonTwo.title} subtitle={data.buttons.buttonTwo.subtitle}
                    backgroundColor="#BAFFC9"
                />
                <ColorizedButton 
                    title={data.buttons.buttonThree.title}
                    backgroundColor="#FFE7D9"
                />
            </div>
        </div>
    )
}

export default DashboardPage;