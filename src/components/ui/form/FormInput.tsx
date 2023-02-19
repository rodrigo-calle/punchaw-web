import TextField from '@mui/material/TextField';

import './FormInput.scss';

type Props = {
    label:string;
    type: string
}

const FormInput = (props: Props) => {
    return(
        <>
            <TextField 
                label={props.label}
                variant="outlined"
                type={props.type}
                InputProps={{
                    style: {borderColor: '#9047FF!important'}
                }}
            />
            <div className='form-input'>
            </div>
        </>
        
    )
}

export default FormInput;