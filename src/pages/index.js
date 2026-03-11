import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const [drivers, setDrivers] = useState([])

  useEffect(() => {
    async function loadDrivers() {
      const { data, error } = await supabase.from("drivers").select("*")

      if (error) {
        console.error("Supabase error:", error)
      } else {
        setDrivers(data || [])
      }
    }

    loadDrivers()
  }, [])

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Olaoluwa Taxi Platform</h1>

      <p>
        Taxi marketplace where the closest driver gets the ride
        and drivers choose the price they are comfortable with.
      </p>

      <Link href="/ride/demo-driver">
        <button style={{ padding: "10px 20px" }}>
          Start Demo Ride
        </button>
      </Link>

      <h2 style={{ marginTop: "30px" }}>Drivers from Supabase</h2>

      {drivers.length === 0 ? (
        <p>No drivers found yet.</p>
      ) : (
        <ul>
          {drivers.map((driver) => (
            <li key={driver.id}>
              {driver.name} - {driver.vehicle} - Multiplier: {driver.price_multiplier}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
