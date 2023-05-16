import styleClasses from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={styleClasses.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div>
                <div className={styleClasses['main-image']}>
                    <img
                        src={mealsImage}
                        alt="A table full of some very nice good food."
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
