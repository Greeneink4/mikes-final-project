import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { Menu } from 'material-ui/Menu';

export const MenuItemList = ({trails, goToTrailDetailsPage}) => {
                    //passing trails data to menu item list
    debugger;
    let trailElements = trails.map(trail => {
        return (
            <MenuItem key={trail.id} onClick={() => goToTrailDetailsPage(trail)}>{trail.name}</MenuItem>
        )
    })

    // const style = {
    //     margin: '200px auto',
    //     background: 'lightgrey',
    //     border: '1px solid black',
    //     width: '375px',
    // }

    if(trailElements && trailElements.length > 0)
        return (
            <Paper> 
                {/* style={style}>  */}
                <Menu>
                    {trailElements}
                </Menu>
            </Paper>
        )
    else
        return <div></div>
}