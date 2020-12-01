import React from 'react'

export default function Person({ name, url }) {
    return (
        <div className="person">
            <h1>name </h1>
            <h4>{name}</h4>
            <img src={url} alt="" width='200' />

        </div>
    )
}
