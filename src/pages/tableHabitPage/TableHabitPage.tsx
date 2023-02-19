import BasicTable from '../../components/tables/basicTable/BasicTable';
import './TableHabitPage.scss';

const TableHabitPage = () => {
    const data = {
        headers: {
            date: 'Día',
            loss: 'Bajo',
            medium: 'Medio',
            hight: 'Alto',
        }
        
    }
    return (
        <div className='table-habit-page'>
            <h1 className='table-habit-page__title'>
                Nombre de hábito
            </h1>
            <div className="table-section">
                <BasicTable />
            </div>
        </div>
    )
}

export default TableHabitPage;