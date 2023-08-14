import React, { useState } from "react";

const SelectorsSelect = ({ sectors, onSelect }) => {
  const [selectedSector, setSelectedSector] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [menu, setMenu] = useState(false);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };
  const handleChange = (event) => {
    
    setSelectedSector(event);
    onSelect(event);
    setMenu(false)
    console.log(event);
  };

  return (
    <>
      <div className="mega-menu">
        <span onClick={()=>setMenu(!menu)} className="selectmenu">
          Select Menu{" "}
          
        </span>
        {menu && (
          <>
            {sectors.map((selector, index) => (
              <div key={index} className="menu-item">
                <div
                  className="menu-title"
                  onClick={() => handleMenuClick(selector.menu)}
                >
                  {selector.menu}
                </div>
                {activeMenu === selector.menu && (
                  <div className="submenu">
                    {selector.submenu.submenuList.map(
                      (subMenuItem, subIndex) => (
                        <div onClick={()=>handleChange(subMenuItem)} key={subIndex} className="sub-menu-item">
                          {subMenuItem}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
      {/* {
      sectors.map((sector,i)=>(
        <ul key={i}>
          <li onClick={()=>setMain(!main)}>
            {sector.menu}
            {main && <>{sector.submenu.submenuList.map((menuList,i)=>(
              <ul key={i}>
                <li onClick={()=>handleClick(menuList)}>{menuList}</li>
                {sector.menu}
                
              </ul>
            ))}</>}
            
          </li>
        </ul>
      ))
    } */}
    </>
  );
};

export default SelectorsSelect;
