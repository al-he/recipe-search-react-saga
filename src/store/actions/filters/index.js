import { FiltersTypes } from '../../types/filters';

export const refreshFilters = filters => ({
    type: FiltersTypes.REFRESH_FILTERS,
    filters,
});

export const clickFilter = filters => ({
    type: FiltersTypes.CLICK_FILTER,
    filters,
});
