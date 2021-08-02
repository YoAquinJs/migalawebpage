import Header from '../Container/Header';
import '../Style/Information.scss'
import tao from '../Assets/MCoin.png'

const Demos = () => {
    const root = document.getElementById('root');
    const body = document.body;
    root.classList.add('white-bg');
    body.classList.add('white-bg');
    return (
        <>
            <div className="header-container">
                <Header />
            </div>
            <div className="text-container">
                <img className="text-container__image" src={tao} />
                <div className="text-container__text">
                    <h1>DEMOS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar eleifend dolor. Vivamus non sem tincidunt, accumsan neque rutrum, convallis orci. Ut rutrum felis dignissim, efficitur neque commodo, malesuada nisl. Sed non ligula nec neque elementum pretium a ac dui. Nam condimentum nisi et ipsum tempor lobortis. Etiam lobortis, libero sed imperdiet pulvinar, metus ex vulputate arcu, at sollicitudin nibh dui sit amet tortor. Nunc magna leo, maximus id facilisis ut, pulvinar sit amet sapien.</p>
                </div>
            </div>
        </>
    )
}

export default Demos;
