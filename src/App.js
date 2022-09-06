import { useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit !== null) {
      let editData = data;
      editData[edit].first = first;
      editData[edit].last = last;
      editData[edit].email = email;
      editData[edit].gender = gender;
      editData[edit].arrived = check ? "yes" : "no";
      setData(editData);
    } else {
      const login = [
        ...data,
        { first, last, email, gender, arrived: check ? "yes" : "no" },
      ];
      setData(login);
    }
    setEmail("");
    setFirst("");
    setLast("");
    setGender("");
    setCheck(false);
    setEdit(null);
  };

  const handleEdit = (index) => {
    let dataEdit = data[index];
    setEmail(dataEdit.email);
    setFirst(dataEdit.first);
    setLast(dataEdit.last);
    setGender(dataEdit.gender);
    setCheck(dataEdit.arrived === "yes" ? true : false);

    setEdit(index);
  };

  const handleDelete = (index) => {
    setData(data.filter((data, index2) => index2 !== index));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Firstname">First-Name:</label>
        <input
          required
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          placeholder="Firstname"
        />
        <br />
        <br />
        <label htmlFor="Lastname">Last-Name:</label>
        <input
          type="text"
          required
          value={last}
          onChange={(e) => setLast(e.target.value)}
          placeholder="lastname"
        />
        <br />
        <br />
        <label htmlFor="">Email-Address:</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="input Email"
        />
        <br />
        <br />
        <label htmlFor="">Gender:</label>
        <select
          required
          value={gender}
          onChange={(value) => setGender(value.target.value)}
          id=""
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={() => setCheck(!check)}
          checked={check}
        />
        <label htmlFor="">
          Recently came into Nigeria within the last 14 days?
        </label>
        <br />
        {edit !== null ? (
          <button type="submit">Update</button>
        ) : (
          <button type="submit">Submit{edit}</button>
        )}
      </form>
      {data.length > 0 && (
        <table className="display">
          <thead>
            <tr>
              <th>Full-Name</th>
              <th>Email-Address</th>
              <th>Gender</th>
              <th>Came to Nigeria within the last 14 days?</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>
                  {(data.last || "").charAt(0).toUpperCase() +
                    (data.last || "").slice(1)}{" "}
                  {(data.first || "").toUpperCase()}
                </td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.arrived}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
{
  /* <td>
{(data.last || "").charAt(0).toUpperCase() +
  (data.last || "").slice(1)}{" "}
{(data.first || "").toUpperCase()}
</td>
<td>{data.email}</td>
<td>{data.gender}</td>
<td></td>
<td>

</td>
<td>
<button>Delete</button>
</td>  */
}
