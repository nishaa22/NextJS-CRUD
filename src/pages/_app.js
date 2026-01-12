import { CounterProvider } from "@/context/Counter";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </SessionProvider>
  )
}
