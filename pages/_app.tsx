import 'tailwindcss/tailwind.css'
import DeviceProvider from '../hooks/deviceProvider'

function MyApp({ Component, pageProps }) {
  return (
    <DeviceProvider>
      <Component {...pageProps} />
    </DeviceProvider>
  )
}

export default MyApp
