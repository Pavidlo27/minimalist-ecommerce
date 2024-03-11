import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-semibold my-10">Sorry, the page you were looking for was not found.</h1>
      <Link to="/" className="px-10 py-5 border-2 inline-block hover:border-black">Return to Home</Link>
    </div>
  )
}
