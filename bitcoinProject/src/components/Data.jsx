import { useNavigate } from 'react-router-dom';
import objeto from './data.module.css'
import image from '../images/btchomepage.png'

function Data(props) {


    const navigate = useNavigate();

    const handleContact = () => {
        return navigate("Historico")
    };


    return (
        <div className={objeto.div}>
            <section className={objeto.section}>
            <img src={image} className={objeto.image} />
            <h className={objeto.h}>Valor atual:</h>
            <p className={objeto.p}>{props.value.symbol} {props.value.price_24h}</p>
            </section>
            <div className={objeto.buttondiv}>
                <a className={objeto.button} onClick={handleContact}>
                    <p className={objeto.buttontxt}>Ir ao historico de preços </p>
                </a>
            </div>
        </div>

    )

}

export default Data;