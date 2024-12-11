"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialBoundsArray = exports.initialBounds = exports.initialViewState = exports.MAX_AGE = void 0;
exports.MAX_AGE = 1 * 24 * 60 * 60;
exports.initialViewState = {
    longitude: 72.878723,
    latitude: 19.077793,
    zoom: 8,
};
exports.initialBounds = {
    ne_lat: 19.2406186802,
    ne_lng: 73.0423213886,
    sw_lat: 18.8875712067,
    sw_lng: 72.7443244885,
};
exports.initialBoundsArray = [
    { lat: 18.8875712067, lng: 72.7443244885 },
    { lat: 19.2406186802, lng: 73.0423213886 },
];
