import { ComponentType } from 'react'


const WithColorSwap = <T extends {}>(Component: ComponentType<T>) => {
  // Realizar logica
  return (props: T) => {
    return (
      <div className='color-swap'>
        <Component {...props} />
      </div>
      )
  }
}

export default WithColorSwap