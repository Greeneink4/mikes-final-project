import React from 'react';
import './trail-form.css'

export const TrailForm = (props) => {
    return (
        <div>
            <label>Have you hiked this trail?<input type="checkbox" onChange={() => props.updateHikedTrail} /></label>
            <br/><br/>
            <textarea onChange={() => props.updateComments} placeholder="Comments about the trail..." rows="10" columns="7"></textarea>
        </div>

    )
}