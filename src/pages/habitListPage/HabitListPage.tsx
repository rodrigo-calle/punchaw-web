import LargeColorizedButton from '../../components/ui/buttons/largeColorizedButton/LargeColorizedButton';
import './HabitListPage.scss';

const HabitListPage = () => {
    return(
        <div className="habit-list-page">
            <div className="buttons-container">
                <LargeColorizedButton 
                    backgroundColor='#B9F3E4'
                    title='Saltar Soga'
                />
                <LargeColorizedButton 
                    backgroundColor='#EA8FEA'
                    title='Saltar Soga'
                />
                <LargeColorizedButton 
                    backgroundColor='#E5FDD1'
                    title='Saltar Soga'
                />
            </div>        
        </div>
    )
}

export default HabitListPage;