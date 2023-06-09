import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // const enteredAmount = amountInputRef.current.value;
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className={classes['form']}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;
