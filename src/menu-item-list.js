import React from 'react';
import MenuItem from 'material-ui/MenuItem';

export const MenuItemList = (props) => {
    return props.items.map(item => {
        return <MenuItem onClick= {props.handleClose(item.id)}>{item.name}</MenuItem>
    })
}