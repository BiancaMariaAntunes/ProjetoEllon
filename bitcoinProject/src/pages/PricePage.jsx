import { useState, useEffect } from 'react'
import Data from '../components/Data'


function PricePage() {
    const [value, setValue] = useState(null)


    useEffect(() => {
        fetch('https://api.blockchain.com/v3/exchange/tickers/BTC-USD')
            .then(res => res.json())
            .then(json => setValue(json))
    }, []);

    return (
        <div>
            {value && <Data value={value} />}
        </div>
    )
}

export default PricePage