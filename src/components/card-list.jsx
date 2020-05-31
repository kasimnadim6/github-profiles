import React from 'react'
import Card from './card';

export default function CardList(props) {

    return (
        <div className="card">
            {
                props.profiles.map(profile=><Card key={profile.id} {...profile}/>)
            }
        </div>
    )
}
