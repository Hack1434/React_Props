import React from 'react';



import ListItem from './ListItem';


const DataObject =  [{
    bgColor:'red',
    icon : 'https://www.bing.com/th?id=OIP.VMu8fKE6RtdnlmFWJ0cBGAHaHa&w=101&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    name: 'gitub',
    link : 'https://github.com/Hack1434'
},
{

    bgColor: 'yellow',
    icon:'https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png',
    name: 'instagram',
    link: 'https://www.instagram.com/chary_0_0_1/'
   
},
{
    bgColor:'grey',
    icon: 'https://th.bing.com/th/id/OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa?rs=1&pid=ImgDetMain',
    name: 'Linkedin' ,
    link : 'https://www.linkedin.com/in/upendra-chary-adulapuram-522b82234/'
},
];





const List = () => (

    <div>
        {DataObject.map((item, index) => (
            <ListItem key={index} data={item} />
        ))}
    </div>
  );


export default List;