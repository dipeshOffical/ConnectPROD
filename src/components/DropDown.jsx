import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const DropDown = () => {
    return (
        <div className='w-full'>
            <Select
                defaultValue="lucy"
                onChange={handleChange}
                className='w-full'
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' }
                ]}
            />
        </div>
    )
}

export default DropDown;