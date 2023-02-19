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
    const headers = [
        {
            header: 'Día',
        },
        {
            header: 'Bajo',
            value: '10 saltos'
        },
        {
            header: 'Medio',
            value: '15 saltos'
        },
        {
            header: 'Alto',
            value: '100 saltos'
        }

    ]

    const body = [
        {
            day: new Date,
            loss: false,
            medium: true,
            higth: false,
        },
        {
            day: new Date,
            loss: false,
            medium: true,
            higth: false,
        }
    ]
    return (
        <div className='table-habit-page'>
            <h1 className='table-habit-page__title'>
                Nombre de hábito
            </h1>
            <div className="table-section">
                <BasicTable
                    headers={headers}
                    rowsData={body}
                />
            </div>
        </div>
    )
}

export default TableHabitPage;