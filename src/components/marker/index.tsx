import ReactDOMServer from 'react-dom/server';

import L from 'leaflet';
import React from 'react';
import { IMarkerDraggableProps } from './model';

export default class MarkerDraggable {
    private markerRef: L.Marker;

    private tooltip = L.tooltip({
        direction: 'top',
        className: 'leaflet-tooltip',
        offset: [0, -5],
        permanent: true,
        interactive: true,
    });

    constructor(MarkerProps: IMarkerDraggableProps, mapRef: L.Map) {
        const latlng = L.latLng(MarkerProps.Latitude || -12.2323631, MarkerProps.Longitude || -52.5935554);
        const icon = L.divIcon({
            className: 'no-class-atribuition',
            iconAnchor: [8, 4],
            html: ReactDOMServer.renderToString(
                <div style={{
                    height: 12,
                    width: 12,
                    borderRadius: '50%',
                    background: 'blue',
                    border: '2px solid #FFF',
                    fillOpacity: 1,
                    color: 'white',
                }}
                />,
            ),
        });
        this.markerRef = L.marker(latlng, { icon, draggable: true }).addTo(mapRef);

        if (MarkerProps.Nome) {
            this.tooltip.setContent(MarkerProps.Nome);
            this.markerRef.bindTooltip(this.tooltip);
        }
    }

    public dragOptions(afterDrag: (newPosition: L.LatLng) => void) {
        if (!this.markerRef.options.draggable) return;
        this.markerRef.on('dragend', () => afterDrag(this.markerRef.getLatLng()));
    }

    public remove() {
        this.markerRef.remove();
    }
}
