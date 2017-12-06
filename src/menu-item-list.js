import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Menu } from 'material-ui/Menu';

export const MenuItemList = ({trails, goToTrailDetailsPage}) => {
    debugger;
    let trailElements = trails.map(trail => {
        return (
            <MenuItem key={trail.id} onClick={() => goToTrailDetailsPage(trail)}>{trail.name} {trail.conditionStatus ? `( ${trail.conditionStatus} )` : ''}</MenuItem>
        )
    })

    const style = {
        display: 'inline-block',
        margin: '200px auto',
        background: 'lightgreen',
    }

    if(trailElements && trailElements.length > 0)
        return (
            <Paper style={style}>
                <Menu>
                    {trailElements}
                </Menu>
            </Paper>
        )
    else
        return <div></div>
}