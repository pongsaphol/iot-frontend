import { useMemo } from 'react'
import { useDevice } from '../hooks/deviceProvider'
import { LightBulbIcon } from '@heroicons/react/outline'

const Index = () => {
  const { state, setState } = useDevice()

  const color = useMemo(() => {
    return state ? 'green' : 'red'
  }, [state])

  const transition = 'transition delay-150 duration-300 ease-in-out'

  return (
    <div
      className={`${transition} flex items-center justify-center h-screen bg-${color}-100`}
    >
      <button
        type="button"
        className={`${transition} inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-${color}-600 focus:outline-none`}
        onClick={() => setState()}
      >
        <LightBulbIcon className="h-20 w-20" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Index
