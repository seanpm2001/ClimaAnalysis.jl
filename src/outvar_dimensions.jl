# Customize these variables to allow other names
LONGITUDE_NAMES = ["long", "lon", "longitude"]
LATITUDE_NAMES = ["lat", "latitude"]
TIME_NAMES = ["t", "time"]
DATE_NAMES = ["date"]
ALTITUDE_NAMES = ["z", "z_reference", "z_physical"]

export times,
    dates,
    longitudes,
    latitudes,
    altitudes,
    time_name,
    date_name,
    longitude_name,
    latitude_name,
    altitude_name

"""
    find_dim_name(dim_names::Iterable, allowed_names::Iterable)

Find the first occurrence of a name in `allowed_names` in `dim_names`.

Example
==========

```jldoctest
julia> ClimaAnalysis.Var.find_dim_name(["z", "lat", "lon"], ["lon", "long"])
"lon"
```
"""
function find_dim_name(dim_names, allowed_names)
    dim_name =
        findfirst(possible_name -> possible_name in dim_names, allowed_names)
    isnothing(dim_name) &&
        error("var does not have $(first(allowed_names)) among its dimensions")
    return allowed_names[dim_name]
end

"""
    time_name(var::OutputVar)

Return the name of the `time` dimension in `var`.
"""
time_name(var::OutputVar) = find_dim_name(keys(var.dims), TIME_NAMES)

"""
    times(var::OutputVar)

Return the `time` dimension in `var`.
"""
times(var::OutputVar) = var.dims[time_name(var)]

"""
    date_name(var::OutputVar)

Return the name of the `date` dimension in `var`.
"""
date_name(var::OutputVar) = find_dim_name(keys(var.dims), DATE_NAMES)

"""
    dates(var::OutputVar)

Return the `date` dimension in `var`.
"""
dates(var::OutputVar) = var.dims[date_name(var)]

"""
    longitude_name(var::OutputVar)

Return the name of the `longitude` dimension in `var`.
"""
longitude_name(var::OutputVar) = find_dim_name(keys(var.dims), LONGITUDE_NAMES)

"""
    longitudes(var::OutputVar)

Return the `longitude` dimension in `var`.
"""
longitudes(var::OutputVar) = var.dims[longitude_name(var)]

"""
    latitude_name(var::OutputVar)

Return the name of the `latitude` dimension in `var`.
"""
latitude_name(var::OutputVar) = find_dim_name(keys(var.dims), LATITUDE_NAMES)

"""
    latitudes(var::OutputVar)

Return the `latitude` dimension in `var`.
"""
latitudes(var::OutputVar) = var.dims[latitude_name(var)]

"""
    altitude_name(var::OutputVar)

Return the name of the `altitude` dimension in `var`.
"""
altitude_name(var::OutputVar) = find_dim_name(keys(var.dims), ALTITUDE_NAMES)

"""
    altitudes(var::OutputVar)

Return the `altitude` dimension in `var`.
"""
altitudes(var::OutputVar) = var.dims[altitude_name(var)]
