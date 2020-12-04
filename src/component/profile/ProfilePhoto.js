import React, { Component } from 'react'
import Photo from './ProfilePhoto.png'

export class ProfilePhoto extends Component {
    render() {
        return (
            <img className='img' src={Photo} alt='ProfilePhoto' />
        )
    }
}
