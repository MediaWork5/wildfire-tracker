import { Icon } from '@iconify/react'
import locationIcons from '@iconify/icons-mdi/fire-alert'

import React from 'react'

const LocationMarker = ( { lat, lag, onClick } ) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcons} className="location-icon" />
        </div>
    )
}

export default LocationMarker
