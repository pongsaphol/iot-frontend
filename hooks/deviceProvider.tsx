import {
  useContext,
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react'
import firebase from '../lib/firebase'

interface deviceContext {
  state: number
  setState: Dispatch<SetStateAction<number>>
}

const initialState = { state: 0 }

const DeviceStateContext = createContext<deviceContext>({
  ...initialState,
  setState: null,
})

export const useDevice = () => useContext(DeviceStateContext)

const deviceContext = ({ children }) => {
  const [state, setState] = useState<number>(initialState.state)
  useEffect(() => {
    const unsubcribe = firebase
      .firestore()
      .doc('hello')
      .onSnapshot((doc) => {
        setState(doc.data().state)
      })
    return () => {
      unsubcribe()
    }
  }, [])
  return (
    <DeviceStateContext.Provider value={{ state, setState }}>
      {children}
    </DeviceStateContext.Provider>
  )
}

export default deviceContext
