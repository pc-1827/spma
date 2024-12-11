"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImageUpload = exports.useSearchLocation = exports.useDebouncedValue = exports.useDebounce = exports.useDialogState = void 0;
const navigation_1 = require("next/navigation");
const react_1 = require("react");
const rxjs_1 = require("rxjs");
const useDialogState = (defaultState = false) => {
    const [open, setOpen] = (0, react_1.useState)(defaultState);
    const pathname = (0, navigation_1.usePathname)();
    const initialPathname = (0, react_1.useRef)(pathname);
    (0, react_1.useEffect)(() => {
        if (pathname !== initialPathname.current) {
            setOpen(false);
            initialPathname.current = pathname;
        }
    }, [pathname, open]);
    return [open, setOpen];
};
exports.useDialogState = useDialogState;
const useDebounce = (delay = 1000) => {
    const [debouncedSet$] = (0, react_1.useState)(() => new rxjs_1.Subject());
    (0, react_1.useEffect)(() => {
        const subscription = debouncedSet$
            .pipe((0, rxjs_1.debounceTime)(delay), (0, rxjs_1.tap)((func) => func()), (0, rxjs_1.catchError)(() => rxjs_1.EMPTY))
            .subscribe();
        return () => subscription.unsubscribe();
    }, [delay, debouncedSet$]);
    return debouncedSet$;
};
exports.useDebounce = useDebounce;
const useDebouncedValue = (value, delay = 1000) => {
    const [debouncedValue, setDebouncedValue] = (0, react_1.useState)(value);
    const debouncedSet$ = (0, exports.useDebounce)(delay);
    (0, react_1.useEffect)(() => {
        debouncedSet$.next(() => setDebouncedValue(value));
    }, [debouncedSet$, value]);
    return debouncedValue;
};
exports.useDebouncedValue = useDebouncedValue;
const useSearchLocation = () => {
    const [searchText, setSearchText] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [locationInfo, setLocationInfo] = (0, react_1.useState)(() => []);
    const debouncedSearchText = (0, exports.useDebouncedValue)(searchText, 300);
    (0, react_1.useEffect)(() => {
        setLoading(true);
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedSearchText}.json?fuzzyMatch=true&access_token=pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ`)
            .then((response) => response.json())
            .then((data) => {
            const filtered = data.features?.map((x) => ({
                placeName: x.place_name,
                latLng: [x.center[1], x.center[0]],
            }));
            setLocationInfo(filtered);
        })
            .finally(() => setLoading(false));
    }, [debouncedSearchText, setLocationInfo]);
    return { loading, setLoading, searchText, setSearchText, locationInfo };
};
exports.useSearchLocation = useSearchLocation;
const useImageUpload = () => {
    const [uploading, setUploading] = (0, react_1.useState)(false);
    const percent = 0;
    const handleUpload = async (files) => {
        if (!files?.length) {
            return [];
        }
        setUploading(true);
        try {
            setUploading(false);
            return [];
        }
        catch (err) {
            console.log(err);
            setUploading(false);
            return [];
        }
    };
    return [{ uploading, percent }, handleUpload];
};
exports.useImageUpload = useImageUpload;
