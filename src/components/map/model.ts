export interface ILocation {
    latitude: number;
    longitude: number;
}

export interface IMapProps {
    children?: any,
    mapRef: React.MutableRefObject<L.Map | null>;
}

