import { useContext, useState, useEffect, createContext } from 'react'
import firebase from '../lib/firebase'

interface deviceContext {
  state: number
  setState: (state: number) => Promise<void>
}

const initialState = { state: 0 }

const DeviceStateContext = createContext<deviceContext>({
  ...initialState,
  setState: null,
})

export const useDevice = () => useContext(DeviceStateContext)

const deviceContext = ({ children }) => {
  const [state, setState] = useState<number>(initialState.state)

  const updateState = async (state: number): Promise<void> => {
    await firebase.firestore().doc('devices/first').update({ state })
  }

  useEffect(() => {
    console.log(state)
  }, [state])

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
