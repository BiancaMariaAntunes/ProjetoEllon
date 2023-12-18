import { useNavigate } from 'react-router-dom';
import objeto from './variation.module.css'

function Variation(props) {
    
    const navigate = useNavigate();

    const handleContact = () => {
        return navigate("/")
    };


    return (
        <div className={objeto.div}>
            <h2 className={objeto.h}>Historico de valores das ultimas compras de Bitcoin</h2>
            <ul className={objeto.table}>
                {props.variation.bids.map((bid, index) => (
                    <li key={index} className={objeto.line}>Preço: {bid.px}</li>
                ))}
            </ul>
            <div className={objeto.buttondiv}>
                <a className={objeto.button} onClick={handleContact}>
                    <p className={objeto.buttontxt}>Voltar a tela inicial </p>
                </a>
            </div>
        </div>

    )

}

export default Variation;