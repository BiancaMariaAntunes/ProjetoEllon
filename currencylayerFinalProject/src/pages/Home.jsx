import CurrencyPage from './CurrencyPage'
import objeto from './home.module.css'
import image from '../images/image.jpg'

function Home() {

    return (
        <div>
            <section className={objeto.section}>
                <div className={objeto.div}>
                    <div className={objeto.textsection}>
                        <h1 className={objeto.h}>Bem-vindo ao</h1>
                        <h1 className={objeto.h2}>Consultor online de taxa de câmbio!</h1>
                        <p className={objeto.p}>Consulte online a taxa de câmbio da moeda desejada com atualização em tempo real!</p>
                    </div>
                    <img src={image} className={objeto.image} />
                </div>

            </section>

        <CurrencyPage/>

        </div>
    )
}

export default Home