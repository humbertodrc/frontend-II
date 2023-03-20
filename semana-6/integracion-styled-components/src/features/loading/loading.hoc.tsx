import { ComponentType } from 'react';
import { LoadingComponent } from 'features/loading/index';

interface WithLoadingProps {
  loading: boolean;
}

function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
  return (props: T & WithLoadingProps) => (
    <>{props.loading ? <LoadingComponent /> : <WrappedComponent {...(props as T)} />}</>
  );
}
export default withLoading;
