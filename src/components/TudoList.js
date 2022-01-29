import React from 'react';

function TudoList({x, id, onselect}) {

  return(<>
       <div className='list'>
       <i onClick={()=>{ onselect(id)}} className='fa fa-times' aria-hidden="true"/>
      <li>{x}</li>
  </div>
  </>);
}

export default TudoList;
