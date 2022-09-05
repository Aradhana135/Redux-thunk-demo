import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData } from "./Actions/Actions";
import { Button } from "antd";
import "antd/dist/antd.css";
function App() {
  const dispatch = useDispatch();
  //select the state value from store
  const todo = useSelector((state) => state.data.todo);
  //dispatch action to add data
  const handleAddData = () => dispatch(addData());
  //dispatch action to delete dataB
  const handleDelete = () => dispatch(deleteData());
  return (
    <div>
      <Button type="primary" onClick={handleAddData}>
        Add data
      </Button>

      <Button type="primary" onClick={handleDelete} style={{ margin: "10px" }}>
        Delete data
      </Button>

      {todo && <div>{JSON.stringify(todo)}</div>}
    </div>
  );
}

export default App;
