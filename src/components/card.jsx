import React from 'react'
import '../css/card.scss';

export default function Card(props) {
    const { avatar_url, name, company } = props;
    return (
        <div className="github-profile">
            <img src={avatar_url} className="profile-img" alt="profile" />
            <div className="info">
                <div className="info__name">{name}</div>
                <div className="info__company">{company}</div>
            </div>
        </div>
    )
}
