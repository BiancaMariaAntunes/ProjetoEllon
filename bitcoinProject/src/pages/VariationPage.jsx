import { useState, useEffect } from 'react'
import Variation from '../components/Variation.jsx'

function VariationPage() {
  const [variation, setVariation] = useState(null)

  useEffect(() => {
    fetch('https://api.blockchain.com/v3/exchange/l2/BTC-USD', {
      headers: {
        'X-API-Token': 'ae94c0a6-1c7d-4f6b-9ec9-926442557d3f',
      },
    })
      .then(response => response.json())
      .then(data => setVariation(data))
  }, []);

  return (
    <div>
      {variation && <Variation variation={variation}/>}
    </div>
  )
}

export default VariationPage