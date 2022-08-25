import React from 'react';
import './ProjectMicroComponent.scss';

import { useSelector } from 'react-redux';

const TechnologyIcon = ({ elem }) => {

  const { mode } = useSelector((state) => state.toggleMode);

    return (
        <div className={`${"technology-icon"} ${mode}`}>{elem}</div>
      );
}
 
export default TechnologyIcon;