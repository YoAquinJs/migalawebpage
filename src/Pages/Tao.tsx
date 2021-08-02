import Header from '../Container/Header';
import '../Style/Information.scss'
import tao from '../Assets/MCoin.png'

const Tao = () => {
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
                    <h1>TAO</h1>
                    <p>El proyecto TAO es una aproximación a solucionar el problema de uso de las criptomonedas como un activo especulativo en los últimos años para dar paso a una economía digital libre, descentralizada y solidaria.</p>
                    <p>TAO busca trabajar fuera de los esquemas convencionales presentes en las Crypto Exchanges.</p>
                </div>
            </div>
            <div className="text-container">
                <div className="text-container__text">
                    <h1>¿Será TAO una criptomoneda?</h1>
                    <p>Por su naturaleza, TAO puede ser descrita como una economía de fichas (token economy). Sin embargo, el término criptomoneda suele estar ligado a ciertos esquemas o contextos que pueden confundir de su verdadera intención.</p>
                    <p>El TAO tiene la intención de funcionar de manera similar a la intención original del bitcoin, solucionando ciertas deficiencias detectadas por nuestro equipo. Dependerá de la forma final que tome el proyecto si este encaja en su totalidad con la definición de criptomoneda.</p>
                    <p>Nuestra preocupación está centrada en crear una alternativa, independientemente de cómo sea etiquetada.</p>
                </div>
            </div>
            <div className="text-container">
                <div className="text-container__text">
                    <h1>¿Podré comprar TAO en Coinbase, Binance, Bitso, etc.?</h1>
                    <p>Al ser postulada como una alternativa al modelo convencional y por los planes de operación proyectados, sería poco conveniente para alguna plataforma mantener este tipo de servicios con el TAO.</p>
                    <p>No descartamos que pueda llegar a intentarse, pero estará completamente desligado a su intención.
                    </p>
                </div>
            </div>
            <div className="text-container">
                <div className="text-container__text">
                    <h1>¿Podré comprar TAO con mi dinero en efectivo?</h1>
                    <p>No en un principio, talvez a futuro.</p>
                    <p>El TAO buscará fomentar una visión económica social por lo que la obtención de la misma está pensada para ser de igual forma resultado de una participación social.</p>
                    <p>Una vez en las carteras de aquellos que las posean, estas podrán ser utilizadas como consideren los individuos; por lo tanto, su posible compra dependerá de la intención de venta de los participantes.</p>
                </div>
            </div>
            <div className="text-container">
                <div className="text-container__text">
                    <h1>¿Cómo sé que el TAO no es un esquema piramidal, un fraude “pump and dump” o alguna otra forma de lucro por parte del equipo desarrollador, Migala o un tercero?</h1>
                    <p>Para esclarecer toda operación del sistema, se está trabajando en una documentación extensa y detallada que busca explicar todas las decisiones tomadas y su finalidad esperada.
                    </p>
                    <p>El código estará disponible a medida que se crea pertinente, a su fecha de lanzamiento se espera tener una plataforma adecuada para su entendimiento a público general y un documento a nivel técnico.</p>
                    <p>La mejor forma de evitar una estafa, es con el sentido común. No tendremos “preventas”, un ICO o algo similar. No utilices tu dinero para “comprar” TAO, si no es de alguien que tenga una reputación confiable para ti. Si es posible, no compres TAO.</p>
                </div>
            </div>
            <div className="text-container">
                <div className="text-container__text">
                    <h1>¿Podré minar TAO?</h1>
                    <p>No. La especificación técnica de minado refiere a un proceso de prueba de trabajo para validación, lo cual no es lo proyectado para TAO. Si se llega a utilizar algún modelo de prueba este buscará ser lo más justo, lo más ecológico y lo menos susceptible a “granjas” automáticas dentro de lo posible.</p>
                </div>
            </div>
            <div className="text-container">
                <div className="text-container__text">
                    <h1>¿Podré ganar dinero con TAO?</h1>
                    <p>Depende que percibas como “ganar dinero”.</p>
                    <p>La idea es que todos aquellos que quieran vender sus productos o servicios, puedan obtener una retribución adecuada.</p>
                    <p>Si tu intención es especulativa, como lo es comprar bitcoin esperando a que su valor suba para venderlas, el TAO está pensado para mantener, dentro de lo posible, un valor estable a largo plazo, haciendo esta acción poco o nada redituable.</p>
                </div>
            </div>
        </>
    )
}

export default Tao;
