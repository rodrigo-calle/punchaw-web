import MainButton from '../../components/ui/buttons/mainButton/MainButton';
import FormInput from '../../components/ui/form/FormInput';
import './RegisterHabitPage.scss';

const RegisterHabitPage = () => {
    return(
        <div className='register-habit-page'>
            <h1 className='register-habit-page__title'>
                Registra tu hábito y comencemos
            </h1>
            <div className='form-container'>
                <FormInput 
                    label='Nombre de hábito'
                    type='text'
                />
                <FormInput 
                    label='Tipo de Medida'
                    type="text"
                />
                <FormInput 
                    label='Rendimiento Alto' 
                    type='number'
                />
                <FormInput 
                    label='Rendimiento Medio'
                    type='number'
                />
                <FormInput 
                    label='Rendimiento Bajo' 
                    type='number'
                />
                <FormInput 
                    label='' 
                    type='date'
                />
                <br />
                <MainButton title='Registrar' uppercase/>
            </div>


        </div>
    )
}

export default RegisterHabitPage;