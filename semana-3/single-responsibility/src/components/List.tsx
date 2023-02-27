
export const List = ({todo}: any) => {
  return (
    <li>✅{` Tarea ${todo.id}: ${todo.title}`}</li>
  )
}
