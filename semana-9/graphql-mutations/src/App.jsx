import {useQuery} from "@apollo/client";
import "./App.css";
import {GET_ALL_TASKS} from "./querys";
import { CreateTask } from './components/CreateTask';

function App() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_TASKS);
  
  const handleRefresh = () => {
    refetch();
  }

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error :(</p>}
			<ul>
				{data?.allTasks.map((task) => (
					<li key={task.id}>
						<h2>{task.title}</h2>
            <p>{task.description}</p>
            <button>Delete</button>
					</li>
				))}
      </ul>
      <CreateTask handleRefresh={handleRefresh} />
		</div>
	);
}

export default App;
