import React from 'react';

const Checkbox = ({ isChecked, onChange, id }) => {
    return (
        <div className='checkbox-wrapper'>
            <input
                className="checkbox-input"
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={id} className='checkbox-label'></label>
        </div>
    );
};
export default Checkbox;
