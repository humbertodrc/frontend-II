import {ComponentType} from "react";
import Loading from "../components/Loading";

function WithLoading<T extends Record<string, any>>(
	Component: ComponentType<T>
) {
	return (props: T) => {
		if (props.characters.length === 0) {
			return <Loading />;
		} else {
			return <Component {...props} />;
		}
	};
}

export default WithLoading;
