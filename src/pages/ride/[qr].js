import { useRouter } from "next/router"
import { useState } from "react"

export default function RidePage(){

  const router = useRouter()
  const { qr } = router.query

  const [fare,setFare] = useState(0)

  const startRide = ()=>{
    setFare(5)
  }

  const endRide = ()=>{
    setFare(12)
  }

  return(

    <div style={{padding:"40px"}}>

      <h1>Taxi Ride</h1>

      <p>Driver Code: {qr}</p>

      <h2>Fare: €{fare}</h2>

      <button onClick={startRide}>
        Start Ride
      </button>

      <br/><br/>

      <button onClick={endRide}>
        End Ride
      </button>

    </div>

  )

}
