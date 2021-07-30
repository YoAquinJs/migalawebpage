import Header from '../Container/Header';
import '../Style/Information.scss'

const Tao = () => (
    <div className="app-container">
        <div className="header-container">
            <Header />
        </div>
        <div className="text-container">
            <img className="text-container__image" src="https://mtdata.ru/u7/photo53A0/20946911428-0/original.jpg#20946911428" />
            <div className="text-container__text">
                <h1>TAO</h1>
                <p>El proyecto TAO es una aproximación a solucionar el problema de uso de las criptomonedas como un activo especulativo en los últimos años para dar paso a una economía digital libre, descentralizada y solidaria.</p>
            </div>
        </div>
        <div className="text-container">

            <div className="text-container__text">
                <h1>¿Será TAO una criptomoneda?</h1>
                <p>Por su naturaleza, TAO puede ser descrita como una economía de fichas (token economy). Sin embargo, el término criptomoneda suele estar ligado a ciertos esquemas o contextos que pueden confundir de su verdadera intención.</p>
            </div>
        </div>
    </div>
)

export default Tao;
