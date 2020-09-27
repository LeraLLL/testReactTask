import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import cn from 'classnames'
import css from './MapPage.module.scss'

function MapPage () {
  return(
    <div className={cn(css.container)}>
      <YMaps>
        <Map
          defaultState={{
            center: [55.75, 37.57],
            zoom: 9,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          width={'100%'}
          height={'400px'}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark defaultGeometry={[55.813354,37.735230]} />
        </Map>
      </YMaps>
    </div>
  )
}


export default MapPage