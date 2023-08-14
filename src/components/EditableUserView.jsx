import React, { useState } from 'react'
import SelectorsSelect from './SelectorsSelect';

const EditableUserView = ({user}) => {
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(user.name);
    const [editedSector, setEditedSector] = useState(user.sector);

    const handleEditClick = () => {
        setEditing(true);
      };
    
      const handleSaveClick = () => {
        // Save edited data to the database
        // Update user's data in the parent component's state
        setEditing(false);
      };
  return (
    <div>
        {editing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <SelectorsSelect
            sectors={['Sector 1', 'Sector 2', 'Sector 3']} // Replace with data from the database
            onSelect={setEditedSector}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Sector: {user.sector}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  )
}

export default EditableUserView