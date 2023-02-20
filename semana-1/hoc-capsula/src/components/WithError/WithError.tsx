import { ComponentType } from 'react';
import Error from '../Error/Error';
function WithError<T extends Record<string, any>>(Component: ComponentType<T>) {
  return (props: T) => {
    if (props.error === false) {
      return <Component {...props} />
    }

    return <Error />
  }
}

export default WithError;