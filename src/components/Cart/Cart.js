import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className={classes['total']}>
                <span>Total:</span>
                <span>$123</span>
            </div>
            <div className={classes['actions']}>
                <button
                    onClick={props.onClose}
                    className={classes['button--alt']}>
                    Close
                </button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
