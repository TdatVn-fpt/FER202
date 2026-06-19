import { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [complete, setComplete] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/todos").then(res => res.json()),
      fetch("https://dummyjson.com/users?limit=300").then(res => res.json())
    ])
      .then(([todoResult, userResult]) => {
        setTodos(todoResult.todos);
        setFilteredTodos(todoResult.todos);
        setUsers(userResult.users);
      });
  }, []);

  useEffect(() => {
    let result = [...todos];

    if (searchKey.trim().length > 0) {
      result = result.filter(t =>
        t.todo.toLowerCase().includes(searchKey.toLowerCase())
      );
    }

    if (complete !== "all") {
      result = result.filter(t => String(t.completed) === complete);
    }

    setFilteredTodos(result);
  }, [searchKey, complete, todos]);

  function getUserName(userId) {
    const user = users.find(u => u.id === userId);

    if (!user) {
      return userId;
    }

    return `${user.firstName} ${user.lastName}`;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h3>Todo list items</h3>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            placeholder="Search by todo includes..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />

          <span className="ms-3">Complete</span>

          <label className="ms-2">
            <input
              type="radio"
              name="complete"
              value="true"
              checked={complete === "true"}
              onChange={(e) => setComplete(e.target.value)}
            />
            True
          </label>

          <label className="ms-2">
            <input
              type="radio"
              name="complete"
              value="false"
              checked={complete === "false"}
              onChange={(e) => setComplete(e.target.value)}
            />
            False
          </label>

          <label className="ms-2">
            <input
              type="radio"
              name="complete"
              value="all"
              checked={complete === "all"}
              onChange={(e) => setComplete(e.target.value)}
            />
            All
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Todo</th>
                <th>Complete</th>
                <th>User</th>
              </tr>
            </thead>

            <tbody>
              {filteredTodos.map(t => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.todo}</td>
                  <td>{t.completed ? "True" : "False"}</td>
                  <td>{getUserName(t.userId)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}