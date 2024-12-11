export const MAX_AGE = 1 * 24 * 60 * 60

export const initialViewState = {
  longitude: 72.878723,
  latitude: 19.077793,
  zoom: 8,
}

export const initialBounds = {
  ne_lat: 19.2406186802,
  ne_lng: 73.0423213886,
  sw_lat: 18.8875712067,
  sw_lng: 72.7443244885,
}

export type Location = {
  latitude: number
  longitude: number
}

type LngLatLike = {
  lng: number
  lat: number
}

export const initialBoundsArray = [
  { lat: 18.8875712067, lng: 72.7443244885 },
  { lat: 19.2406186802, lng: 73.0423213886 },
] as [LngLatLike, LngLatLike]
