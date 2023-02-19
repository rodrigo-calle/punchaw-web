import MainButton from '../../components/ui/buttons/mainButton/MainButton';
import './MainPage.scss';

const MainPage = () => {
    return(
        <div className='main-page'>
            <h1 className='slogan'>
                Crea y lleva el 
                Registro de tus 
                Hábitos
            </h1>

            <div className='img-container'>
                <img 
                    className='main-image'
                    src="https://res.cloudinary.com/dwat1o60y/image/upload/v1676754607/punchaw/habbit_gmc2lk.png"
                    alt="Crea tus hábitos" 
                />
            </div>
            <div className="main-button-container">
                <MainButton title='entrar' uppercase />
            </div>

        </div>
    )
}

export default MainPage;