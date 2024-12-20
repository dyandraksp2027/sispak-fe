import React from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white shadow rounded-lg p-6">{children}</div>
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-semibold">{children}</h2>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-4">{children}</div>
}

