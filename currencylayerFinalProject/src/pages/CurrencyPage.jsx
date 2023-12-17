import { useState, useEffect } from 'react'
import objeto from './currencypage.module.css'

function CurrencyPage() {
    const [finalCurrency, setFinalCurrency] = useState('')
    const [result, setResult] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (finalCurrency) {
                try {
                    const response = await fetch(
                        `http://apilayer.net/api/live?access_key=0866620e8e2c120aa9e077b0cb0f0404&currencies=${finalCurrency}&format=1`
                    );

                    const data = await response.json()

                    if (data.success) {
                        const rates = data.quotes

                        const resultados = Object.entries(rates)
                            .map(([symbol, tax]) => ({ symbol, tax }))
                        setResult(resultados)

                    } else {
                        console.log(error)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }

        fetchData()
    }, [finalCurrency])
    return (
        <section className={objeto.section}>
            <div className={objeto.div}>
                <div className={objeto.inputsection}>
                    <label className={objeto.label}>Digite aqui as moedas as quais deseja conferir a taxa de câmbio:</label>
                    <p className={objeto.p}>* lembre-se sempre de as dividir por virgulas! ex: EUR, BRL,</p>
                    <input type="text" value={finalCurrency} onChange={(e) => setFinalCurrency(e.target.value)} />
                </div>

                {result ? (
                    <div className={objeto.result}>
                        {result.map(({ symbol, tax }) => (
                            <div key={symbol} className={objeto.quadrado}>
                                <p className={objeto.tax}>
                                    {symbol}: {tax}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </section>
    )
}

export default CurrencyPage