import { React } from "react";

const SimpleTable = ({ dataSource, onDelete, onGetID }) => {
  return (
    <div>
      {dataSource.length ? (
        <>
          <table className="tab">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataSource.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button id="editBtn" onClick={()=> onGetID({name:item.name, email:item.email, id:item.id})}>Edit</button>
                      <button id="deleteBtn" onClick={()=> onDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
