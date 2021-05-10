import { useDevice } from '../hooks/deviceProvider'

const Index = () => {
  const { state, setState } = useDevice()
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>click</button>
    </>
  )
}

export default Index
