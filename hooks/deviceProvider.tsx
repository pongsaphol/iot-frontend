import { useContext, useState, useEffect, createContext } from 'react'
import firebase from '../lib/firebase'

interface deviceContext {
  state: boolean
  setState: () => Promise<void>
}

const initialState = { state: false }

const DeviceStateContext = createContext<deviceContext>({
  ...initialState,
  setState: null,
})

export const useDevice = () => useContext(DeviceStateContext)

const deviceContext = ({ children }) => {
  const [state, setState] = useState<boolean>(initialState.state)

  const updateState = async (): Promise<void> => {
    await firebase.firestore().doc('devices/first').update({ state: !state })
  }

  useEffect(() => {
    const unsubcribe = firebase
      .firestore()
      .doc('devices/first')
      .onSnapshot((doc) => {
        setState(doc.data().state)
      })
    return () => {
      unsubcribe()
    }
  }, [])

  return (
    <DeviceStateContext.Provider value={{ state, setState: updateState }}>
      {children}
    </DeviceStateContext.Provider>
  )
}

export default deviceContext
