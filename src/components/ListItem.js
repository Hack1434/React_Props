import React from 'react'


const ListItem = ({data}) => (

    <div className="listItem" id="List" style={{ backgroundColor: data.bgColor}}>
 <img src={data.icon} alt={data.name} />
 <a href={data.link}>{data.name}</a>
    </div>
  );


export default ListItem;