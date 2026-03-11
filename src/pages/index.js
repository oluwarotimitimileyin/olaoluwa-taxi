import Link from "next/link"

export default function Home() {

  return (

    <div style={{padding:"40px",fontFamily:"Arial"}}>

      <h1>Olaoluwa Taxi Platform</h1>

      <p>
        Taxi marketplace where the closest driver gets the ride
        and drivers choose the price they are comfortable with.
      </p>

      <Link href="/ride/demo-driver">

        <button style={{padding:"10px 20px"}}>
          Start Demo Ride
        </button>

      </Link>

    </div>

  )

}
