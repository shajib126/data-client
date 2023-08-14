import React, { useState } from 'react'
import SelectorsSelect from './SelectorsSelect';
import axios from 'axios';
import cogoToast from 'cogo-toast';
const UserForm = () => {
    const [name, setName] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [agreed, setAgreed] = useState(false);

  const selectors = [
    {
      menu:"Manufacturing",
      submenu:{submenuList:['Construction materials','Electronics and Optics','Food and Bevarage'],foodAndBevarage:['Bakery & confectionary products','Beverages','Fish & fish products','meat & meat products','milk & dairy products','Other','Sweets & snack food']}
    },
    {
      menu:'Furniture',
      submenu:{submenuList:['Bathroom/sauna','Bedroom','Childrens room','Kitchen','Living room','Office','Other (Furniture)','Outdoor','Project furniture']}
    },
    {
      menu:'Machinery',
      submenu:{submenuList:['Machinery components','Machinery equipments/tools','Manufacture of machinery','Maritime','Metal structure','Other','Repair and maintainence service'],Maritime:['Aluminium and steel workboats','Boat/Yacht building','Ship repire and conversion']}
    },
    {
      menu:'Metalworking',
      submenu:{submenuList:['Construction of metal structures','Houses and buildings','Metal products','Metal works'],Metalworks:['CNC-machining','Foreign, Fasteners','Gas, Plasma, Laser cutting','MIG, TIG, Aluminium welding']}
    },
    {
      menu:'Plastic and Rubber',
      submenu:{submenuList:['Packaging','Plastic goods','Plastic processing technlogy','Plastic profile'],PlasticProcessingTech:['Blowing','Moulding','Plastic welding and processing']}
    },
    {
      menu:"Printing",
      submenu:{submenuList:['Advertising','Book/Periodicals printing','Labelling and packaging printing']}
    },
    {
      menu:"Textile and Clothing",
      submenu:{submenuList:['Clothing','Textile']}
    },
    {
      menu:'Wood',
      submenu:{submenuList:['Other (Wood)','Wooden building materials','Wooden houses']}
    },
    {
      menu:'Other',
      submenu:{submenuList:['Creative industries','Energy technology','Environment']}

    },
    {
      menu:'Services',
      submenu:{submenuList:['Business services','Engineering','Information Technology and Telecommunications','Tourism','translation services','Transport and logistics'],informationTechAndTele:['Data processing','Web portals','E-marketing programming','Consultancy','Software','Hardware','Telecommunications'],transportAndLogistic:['Air','Rail','Road','Water']}
    }
  ]
  const handleSectorSelect = (sector) => {
    setSelectedSector(sector);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate input fields here
    if (!name || !selectedSector || !agreed) {
      cogoToast.info('All fields are mandatory.');
      return;
    }
    console.log(name,selectedSector,agreed);
    // Store data to the database (you need a backend for this)
    // Refill the form using stored data
    axios.post('https://data-server-s06r.onrender.com/api/create',{name,sector:selectedSector,isAgree:agreed}).then((res)=>{
      console.log(res);
      cogoToast.success('Data added Successfully')
    }).catch((err)=>{
      console.log(err);
      cogoToast.error(err)
    })
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>User Data</h1>
      <div className='input_and_menu'>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SelectorsSelect
        sectors={selectors} // Replace with data from the database
        onSelect={handleSectorSelect}
      />
      </div>
      <div className='terms_and_save'>
      <label>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        Agree to terms
      </label>
      
      </div>
      <button className='save' type="submit">Save</button>
    </form>
  )
}

export default UserForm