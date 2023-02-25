import "./App.css";
import {useAppDispatch, useAppSelector} from "./store/store";
import {active, inactive} from "./store/notificationsSlice";

function App() {
	const notifications = useAppSelector((state) => state.notifications);
	const dispatch = useAppDispatch();

	const handleActive = () => {
		dispatch(notifications.status === "activas" ? inactive() : active());
	};

	const handleAlertMessage = () => {
		alert(notifications.message);
  };
  
	return (
		<div className="container">
			<h1>
				¿Desesa recibir notificaciones sobre la serie Rick y Morty en su email?
			</h1>
			<p>
				Status Actual: <span>{notifications.status}</span>
			</p>
      <div className='message-buttons'>
        <button onClick={handleActive}>{notifications.actions}</button>
        <button onClick={handleAlertMessage} className="sa">
          Guardar
        </button>
      </div>
		</div>
	);
}

export default App;
