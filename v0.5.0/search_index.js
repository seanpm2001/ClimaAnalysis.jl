var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"APIs","title":"API","text":"","category":"section"},{"location":"api/","page":"APIs","title":"APIs","text":"CurrentModule = ClimaAnalysis","category":"page"},{"location":"api/#SimDir","page":"APIs","title":"SimDir","text":"","category":"section"},{"location":"api/","page":"APIs","title":"APIs","text":"SimDir\nBase.get\navailable_vars\navailable_reductions\navailable_periods","category":"page"},{"location":"api/#ClimaAnalysis.SimDir","page":"APIs","title":"ClimaAnalysis.SimDir","text":"SimDir(simulation_path::String)\n\nObject that describes all the ClimaAtmos output found in the given simulation_path.\n\n\n\n\n\n","category":"type"},{"location":"api/#Base.get","page":"APIs","title":"Base.get","text":"get(simdir::SimDir;\n    short_name,\n    reduction = nothing,\n    period = nothing)\n\nReturn a OutputVar for the corresponding combination of short_name, reduction, and period (if it exists).\n\nThe variable is read only once and saved into the simdir.\n\nKeyword arguments\n\nWhen passing nothing to reduction and period, ClimaAnalysis will try to automatically deduce the value. An error will be thrown if this is not possible.\n\nFor instance, if the simulation has only one ta, you do not need to specify short_name, reduction, and period (short_name is enough). Similarly, if there is only one ta_average (ie, not multiple periods), short_name and reduction will be enough.\n\n\n\n\n\nget(simdir::SimDir, short_name)\n\nIf only one reduction and period exist for short_name, return the corresponding OutputVar.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.available_vars","page":"APIs","title":"ClimaAnalysis.available_vars","text":"available_vars(simdir::SimDir)\n\nReturn the short names of the variables found in the given simdir.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.available_reductions","page":"APIs","title":"ClimaAnalysis.available_reductions","text":"available_reductions(simdir::SimDir, short_name::String)\n\nReturn the reductions available for the given variable in the given simdir.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.available_periods","page":"APIs","title":"ClimaAnalysis.available_periods","text":"available_periods(simdir::SimDir, short_name::String, reduction::String)\n\nReturn the periods associated to the given variable and reduction.\n\n\n\n\n\n","category":"function"},{"location":"api/#OutputVar","page":"APIs","title":"OutputVar","text":"","category":"section"},{"location":"api/","page":"APIs","title":"APIs","text":"OutputVar\nread_var\nis_z_1D\nshort_name\nlong_name\nunits\nslice\naverage_lat\naverage_lon\naverage_time\nwindow\narecompatible\ncenter_longitude!","category":"page"},{"location":"api/#ClimaAnalysis.OutputVar","page":"APIs","title":"ClimaAnalysis.OutputVar","text":"Representing an output variable\n\n\n\n\n\n","category":"type"},{"location":"api/#ClimaAnalysis.read_var","page":"APIs","title":"ClimaAnalysis.read_var","text":"read_var(path::String)\n\nRead a variable in the given NetCDF file.\n\nExample\n\nsimdir = SimDir(\"my_output\")\nread_var(simdir.variable_paths[\"hu\"][\"inst\"])\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.is_z_1D","page":"APIs","title":"ClimaAnalysis.is_z_1D","text":"is_z_1D(var::OutputVar)\n\nReturn whether the given variable has an altitude dimension that is 1D.\n\nWhen topography is present, the altitude dimension in the output variable is typically multidimensional. The dimensions are (X, Y, Z), where (X, Y) are the horizontal dimensions. In this case, dims[\"z\"] is essentially a map that identifies the physical altitude of the given point.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.short_name","page":"APIs","title":"ClimaAnalysis.short_name","text":"short_name(var::OutputVar)\n\nReturn the short_name of the given var, if available.\n\nIf not available, return an empty string.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.long_name","page":"APIs","title":"ClimaAnalysis.long_name","text":"long_name(var::OutputVar)\n\nReturn the long_name of the given var, if available.\n\nIf not available, return an empty string.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.units","page":"APIs","title":"ClimaAnalysis.units","text":"units(var::OutputVar)\n\nReturn the units of the given var, if available.\n\nIf not available, return an empty string.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.slice","page":"APIs","title":"ClimaAnalysis.slice","text":"slice(var::OutputVar, kwargs...)\n\nReturn a new OutputVar by slicing across dimensions as defined by the keyword arguments.\n\nExample\n\nslice(var, lat = 30, lon = 20, time = 100)\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.average_lat","page":"APIs","title":"ClimaAnalysis.average_lat","text":"average_lat(var::OutputVar)\n\nReturn a new OutputVar where the values on the latitudes are averaged arithmetically.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.average_lon","page":"APIs","title":"ClimaAnalysis.average_lon","text":"average_lon(var::OutputVar)\n\nReturn a new OutputVar where the values on the longitudes are averaged arithmetically.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.average_time","page":"APIs","title":"ClimaAnalysis.average_time","text":"average_time(var::OutputVar)\n\nReturn a new OutputVar where the values are averaged arithmetically in time.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.window","page":"APIs","title":"ClimaAnalysis.window","text":"window(var::OutputVar, dim_name; left = nothing, right = nothing)\n\nReturn a new OutputVar by selecting the values of the given dimension that are between left and right.\n\nIf left and/or right are nothing, assume beginning (or end) of the array.\n\nExample\n\nwindow(var, 'lat', left = -50, right = 50)\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.arecompatible","page":"APIs","title":"ClimaAnalysis.arecompatible","text":"arecompatible(x::OutputVar, y::OutputVar)\n\nReturn whether two OutputVar are defined on the same physical space\n\nThis is accomplished by comparing dims and dim_attributes (the latter because they might contain information about the units).\n\nWe assume that:\n\ndim2index and index2dim where correctly created and they reflect dims\ndata is also consistent with dims,\n\nWe also do not check units for data.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.center_longitude!","page":"APIs","title":"ClimaAnalysis.center_longitude!","text":"center_longitude!(var::OutputVar, lon::Real)\n\nShift the longitudes in var so that lon is the center one.\n\nThis is useful to center the global projection to the 180 meridian instead of the 0.\n\n\n\n\n\n","category":"function"},{"location":"api/#Utilities","page":"APIs","title":"Utilities","text":"","category":"section"},{"location":"api/","page":"APIs","title":"APIs","text":"For development and not","category":"page"},{"location":"api/","page":"APIs","title":"APIs","text":"Utils.match_nc_filename\nUtils.squeeze\nUtils.nearest_index\nUtils.kwargs\nUtils.seconds_to_prettystr","category":"page"},{"location":"api/#ClimaAnalysis.Utils.match_nc_filename","page":"APIs","title":"ClimaAnalysis.Utils.match_nc_filename","text":"match_nc_filename(filename::String)\n\nReturn short_name, period, reduction extracted from the filename, if matching the expected convention.\n\nThe convention is: shortname_(period)_reduction.nc, with period being optional.\n\nExamples\n\njulia> match_nc_filename(\"bob\")\n\njulia> match_nc_filename(\"ta_1d_average.nc\")\n(\"ta\", \"1d\", \"average\")\n\njulia> match_nc_filename(\"pfull_6.0min_max.nc\")\n(\"pfull\", \"6.0min\", \"max\")\n\njulia> match_nc_filename(\"hu_inst.nc\")\n(\"hu\", nothing, \"inst\")\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Utils.squeeze","page":"APIs","title":"ClimaAnalysis.Utils.squeeze","text":"squeeze(A :: AbstractArray; dims)\n\nReturn an array that has no dimensions with size 1.\n\nWhen an iterable dims is passed, only try to squeeze the given dimensions.\n\nExamples\n\njulia> A = [[1 2] [3 4]];\n\njulia> size(A)\n(1, 4)\n\njulia> A_squeezed = squeeze(A);\n\njulia> size(A_squeezed)\n(4,)\n\njulia> A_not_squeezed = squeeze(A; dims = (2, ));\n\njulia> size(A_not_squeezed)\n(1, 4)\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Utils.nearest_index","page":"APIs","title":"ClimaAnalysis.Utils.nearest_index","text":"nearest_index(A::AbstractArray, val)\n\nReturn the index in A closest to the given val.\n\nExamples\n\njulia> A = [-1, 0, 1, 2, 3, 4, 5];\n\njulia> nearest_index(A, 3)\n5\n\njulia> nearest_index(A, 0.1)\n2\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Utils.kwargs","page":"APIs","title":"ClimaAnalysis.Utils.kwargs","text":"kwargs(; kwargs...)\n\nConvert keyword arguments in a dictionary that maps Symbols to values.\n\nUseful to pass keyword arguments to different constructors in a function.\n\nExamples\n\njulia> kwargs(a = 1)\npairs(::NamedTuple) with 1 entry:\n  :a => 1\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Utils.seconds_to_prettystr","page":"APIs","title":"ClimaAnalysis.Utils.seconds_to_prettystr","text":"seconds_to_prettystr(seconds::Real)\n\nConvert the given seconds into a string with rich time information.\n\nOne year is defined as having 365 days.\n\nExamples\n\njulia> seconds_to_prettystr(10)\n\"10s\"\n\njulia> seconds_to_prettystr(600)\n\"10m\"\n\njulia> seconds_to_prettystr(86400)\n\"1d\"\n\njulia> seconds_to_prettystr(864000)\n\"10d\"\n\njulia> seconds_to_prettystr(864010)\n\"10d 10s\"\n\njulia> seconds_to_prettystr(24 * 60 * 60 * 365 + 1)\n\"1y 1s\"\n\n\n\n\n\n","category":"function"},{"location":"api/#CairoMakie","page":"APIs","title":"CairoMakie","text":"","category":"section"},{"location":"api/","page":"APIs","title":"APIs","text":"Visualize.heatmap2D!\nVisualize.sliced_heatmap!\nVisualize.heatmap!\nVisualize.line_plot1D!\nVisualize.sliced_line_plot!\nVisualize.sliced_plot!\nVisualize.plot!","category":"page"},{"location":"api/#ClimaAnalysis.Visualize.heatmap2D!","page":"APIs","title":"ClimaAnalysis.Visualize.heatmap2D!","text":"heatmap2D!(fig::CairoMakie.Figure,\n           var::ClimaAnalysis.OutputVar;\n           p_loc = (1,1),\n           more_kwargs)\nheatmap2D!(grid_layout::CairoMakie.GridLayout,\n           var::ClimaAnalysis.OutputVar;\n           p_loc = (1,1),\n           more_kwargs)\n\nPlot a heatmap of the given 2D variable in the given place and location. The place can be a Figure or a GridLayout.\n\nThe plot comes with labels, units, and a colorbar.\n\nThis function assumes that the following attributes are available:\n\nlong_name\nshort_name\nunits (also for the dimensions)\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\nthe colorbar (:cb)\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Visualize.sliced_heatmap!","page":"APIs","title":"ClimaAnalysis.Visualize.sliced_heatmap!","text":"sliced_heatmap!(fig::CairoMakie.Figure,\n                var::ClimaAnalysis.OutputVar,\n                cut::Union{Nothing, AbstractDict{String, <: Real}};\n                p_loc = (1,1),\n                more_kwargs,\n                )\nsliced_heatmap!(grid_layout::CairoMakie.GridLayout,\n                var::ClimaAnalysis.OutputVar,\n                cut::Union{Nothing, AbstractDict{String, <: Real}};\n                p_loc = (1,1),\n                more_kwargs,\n                )\n\nTake a variable, slice as directed, and plot a 2D heatmap in the given place and location.\n\nThe place can be a Figure or a GridLayout.\n\nThe plot comes with labels, units, and a colorbar.\n\nArguments\n\nIf the variable is not 2D, cut has to be a dictionary that maps the dimension that has to be sliced and the value where to cut.\n\nFor example, if var has four dimensions: time, long, lat, z, this function can be used to plot a lat-long heatmap at fixed time and z. Assuming we want to plot time 100. and altitude 50., cut should be Dict(\"time\" => 100., \"z\" => 50.).\n\nThis function assumes that the following attributes are available:\n\nlong_name\nshort_name\nunits (also for the dimensions)\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\nthe colorbar (:cb)\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Visualize.heatmap!","page":"APIs","title":"ClimaAnalysis.Visualize.heatmap!","text":"heatmap!(place::MakiePlace,\n         var::ClimaAnalysis.OutputVar;\n         p_loc = (1,1),\n         more_kwargs,\n         kwargs...\n        )\n\nSyntactic sugar for sliced_heatmap with kwargs instead of cut.\n\nExample\n\nheatmap!(fig, var, time = 100, lat = 70) plots a heatmap by slicing var along the time nearest to 100 and latitude nearest 70.\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\nthe colorbar (:cb)\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Visualize.line_plot1D!","page":"APIs","title":"ClimaAnalysis.Visualize.line_plot1D!","text":"line_plot1D!(place::CairoMakie.Figure,\n             var::ClimaAnalysis.OutputVar;\n             p_loc = (1,1),\n             more_kwargs\n             )\nline_plot1D!(place::CairoMakie.GridLayout,\n             var::ClimaAnalysis.OutputVar;\n             p_loc = (1,1),\n             more_kwargs\n             )\n\nPlot a line plot of the given 1D variable in the given place and location. The place can be a Figure or a GridLayout.\n\nThe plot comes with labels, units.\n\nThis function assumes that the following attributes are available:\n\nlong_name\nshort_name\nunits (also for the dimensions)\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\nA special argument that can be passed to :axis is :dim_on_y, which puts the dimension on the y axis instead of the variable. This is useful to plot columns with z on the vertical axis instead of the horizontal one.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Visualize.sliced_line_plot!","page":"APIs","title":"ClimaAnalysis.Visualize.sliced_line_plot!","text":"sliced_line_plot!(place::CairoMakie.Figure,\n                  var::ClimaAnalysis.OutputVar,\n                  cut::Union{Nothing, AbstractDict{String, <: Real}};\n                  p_loc = (1,1),\n                  more_kwargs\n                  )\nsliced_line_plot!(place::CairoMakie.GridLayout,\n                  var::ClimaAnalysis.OutputVar,\n                  cut::Union{Nothing, AbstractDict{String, <: Real}};\n                  p_loc = (1,1),\n                  more_kwargs\n                  )\n\nTake a variable, slice as directed, and plot a 1D line plot in the given place and location. The place can be a Figure or a GridLayout.\n\nThe plot comes with labels, and units.\n\nArguments\n\nIf the variable is not 1D, cut has to be a dictionary that maps the dimension that has to be sliced and the value where to cut.\n\nFor example, if var has four dimensions: time, long, lat, z, this function can be used to plot a lat-long heatmap at fixed time and z. Assuming we want to plot time 100. and altitude 50., cut should be Dict(\"time\" => 100., \"z\" => 50.).\n\nThis function assumes that the following attributes are available:\n\nlong_name\nshort_name\nunits (also for the dimensions)\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Visualize.sliced_plot!","page":"APIs","title":"ClimaAnalysis.Visualize.sliced_plot!","text":"sliced_plot!(place::CairoMakie.Figure,\n             var::ClimaAnalysis.OutputVar,\n             cut::Union{Nothing, AbstractDict{String, <: Real}};\n             p_loc = (1,1),\n             more_kwargs\n             )\nsliced_plot!(place::CairoMakie.GridLayout,\n             var::ClimaAnalysis.OutputVar,\n             cut::Union{Nothing, AbstractDict{String, <: Real}};\n             p_loc = (1,1),\n             more_kwargs\n             )\n\nTake a variable, slice as directed, and plot a 1D line plot or 2D heatmap in the given place and location. The place can be a Figure or a GridLayout.\n\nThe plot comes with labels, and units (and possibly a colorbar).\n\nArguments\n\nIf the variable is not 1D/2D, cut has to be a dictionary that maps the dimension that has to be sliced and the value where to cut.\n\nFor example, if var has four dimensions: time, long, lat, z, this function can be used to plot a lat-long heatmap at fixed time and z. Assuming we want to plot time 100. and altitude 50., cut should be Dict(\"time\" => 100., \"z\" => 50.).\n\nThis function assumes that the following attributes are available:\n\nlong_name\nshort_name\nunits (also for the dimensions)\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\nthe colorbar (:cb)\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\n\n\n\n\n","category":"function"},{"location":"api/#ClimaAnalysis.Visualize.plot!","page":"APIs","title":"ClimaAnalysis.Visualize.plot!","text":"plot!(place::CairoMakie.Figure,\n      var::ClimaAnalysis.OutputVar;\n      p_loc = (1,1),\n      more_kwargs,\n      kwargs...\n      )\nplot!(place::CairoMakie.GridLayout,\n      var::ClimaAnalysis.OutputVar;\n      p_loc = (1,1),\n      more_kwargs,\n      kwargs...\n      )\n\nSyntactic sugar for sliced_plot with kwargs instead of cut.\n\nExample\n\nline_plot!(fig, var, time = 100, lat = 70) plots a line plot or a heatmap by slicing var along the time nearest to 100 and latitude nearest 70.\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\nthe colorbar (:cb)\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\n\n\n\n\n","category":"function"},{"location":"api/#GeoMakie","page":"APIs","title":"GeoMakie","text":"","category":"section"},{"location":"api/","page":"APIs","title":"APIs","text":"Visualize.heatmap2D_on_globe!","category":"page"},{"location":"api/#ClimaAnalysis.Visualize.heatmap2D_on_globe!","page":"APIs","title":"ClimaAnalysis.Visualize.heatmap2D_on_globe!","text":"heatmap2D_on_globe!(fig::CairoMakie.Figure,\n                    var::ClimaAnalysis.OutputVar;\n                    p_loc = (1,1),\n                    plot_coastline = true,\n                    more_kwargs)\nheatmap2D_on_globe!(grid_layout::CairoMakie.GridLayout,\n                    var::ClimaAnalysis.OutputVar;\n                    p_loc = (1,1),\n                    plot_coastline = true,\n                    more_kwargs)\n\nPlot a heatmap of the given 2D variable on a projected geoid.\n\nThe plot comes with labels, units, and a colorbar.\n\nThis function assumes that the following attributes are available:\n\nlong_name\nshort_name\nunits\n\nThe dimensions have to be longitude and latitude.\n\nAdditional arguments to the plotting and axis functions\n\nmore_kwargs can be a dictionary that maps symbols to additional options for:\n\nthe axis (:axis)\nthe plotting function (:plot)\nthe colorbar (:cb)\nthe coastline (:coast)\n\nThe coastline is plotted from GeoMakie.coastline using the lines! plotting function.\n\nThe values are splatted in the relevant functions. Populate them with a Dictionary of Symbols => values to pass additional options.\n\n\n\n\n\n","category":"function"},{"location":"howdoi/#How-to-guide-and-cookbook","page":"How do I?","title":"How-to guide and cookbook","text":"","category":"section"},{"location":"howdoi/#How-do-I-make-a-line-plot-with-variable-on-the-y-axis-instead-of-the-x-one?","page":"How do I?","title":"How do I make a line plot with variable on the y axis instead of the x one?","text":"","category":"section"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"By default, the plotting functions in CairoMakieExt place the variable on the x axis. If you want it on the y axis instead (e.g., you are plotting the vertical profile of a column), you can pass the dim_on_y = true argument to the axis.","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"For instance,","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"plot!(var, more_kwargs = Dict(:axis => [:dim_on_y = true]))","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"ClimaAnalysis.Utils provides a convenience function kwargs to specify arguments a little bit more easily without having to think about Symbols too much.","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"plot!(var, more_kwargs = Dict(:axis => kwargs(dim_on_y = true))","category":"page"},{"location":"howdoi/#How-do-I-take-an-average-of-a-a-variable-in-a-given-window-of-time?","page":"How do I?","title":"How do I take an average of a a variable in a given window of time?","text":"","category":"section"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"You can use the window function to select a portion of a given var. For example, to select only the time from 10 seconds to 100 for var","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"reduced_var = window(var, \"time\", left = 10, right = 100)","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"Now, you can apply the usual average functions.","category":"page"},{"location":"howdoi/#How-do-I-make-the-y-axis-logscale?","page":"How do I?","title":"How do I make the y axis logscale?","text":"","category":"section"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"The plotting routines can pass additional arguments to Makie through the more_kwargs keyword arguments. more_kwargs has to be a dictionary that maps symbols to a list of pairs. The accepted symbols are :axis, :plot, and :cb, and the pairs have to be pairs of symbols to values (the keyword arguments you want to pass down). Given that the type structure is a little complicated, ClimaAnalysis comes with a helper function for you to use. So, if you want to set the logscale for the y axis, you would do something like","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"import ClimaAnalysis.Utils: kwargs as ca_kwargs\n\nplot!(fig, var, more_kwargs = Dict(:axis => ca_kwargs(yscale = log)))","category":"page"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"where inside ca_kwargs you pass the arguments you would pass to Makie.Axis.","category":"page"},{"location":"howdoi/#How-do-I-center-my-longitude-to-180-instead-of-0?","page":"How do I?","title":"How do I center my longitude to 180 instead of 0?","text":"","category":"section"},{"location":"howdoi/","page":"How do I?","title":"How do I?","text":"You can use the center_longitude! function.","category":"page"},{"location":"#ClimaAnalysis","page":"Home","title":"ClimaAnalysis","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"ClimaAnalysis, your one-stop-shop for all your CliMA analysis needs.","category":"page"},{"location":"#Quick-start","page":"Home","title":"Quick start","text":"","category":"section"},{"location":"#SimDir","page":"Home","title":"SimDir","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Suppose you ran a ClimaAtmos simulation, and the output is saved in the folder simulation_output. The first step in using ClimaAnalysis is to instantiate a SimDir:","category":"page"},{"location":"","page":"Home","title":"Home","text":"import ClimaAnalysis\n\nsimdir = ClimaAnalysis.SimDir(\"simulation_output\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"ClimaAnalysis.SimDir scans the simulation_output, finds all the output files, and organizes them.","category":"page"},{"location":"","page":"Home","title":"Home","text":"As of version 0.1.0, ClimaAnalysis uses file names to identify files and variables. In this, ClimaAnalysis assumes that the default names for outputs are used in ClimaAtmos (i.e., <short_name>_<reduction_time>_<reduction_type>.nc, as in ta_1h_max.nc, or <short_name>_inst.nc).","category":"page"},{"location":"","page":"Home","title":"Home","text":"Once you have a SimDir, you can inspect the output. For example, to find what variables are available:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> println(summary(simdir))\nOutput directory: simulation_output\nVariables:\n- va\n    average (2.0h)\n- ua\n    average (6.0h)\n- orog\n    inst\n- ta\n    average (3.0h)\n    max (4.0h, 3.0h)\n    min (3.0h)\n- ts\n    max (1.0h)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Now, you can access any given variable","category":"page"},{"location":"","page":"Home","title":"Home","text":"ta_max = get(simdir; short_name = \"t12\", reduction = \"max\", period = \"3.0h\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"ta_max is a OutputVar, a type that contains the variable as well as some metadata. When there is only one combination short_name/reduction/period, the function get can be used with get(simdir, short_name) (e.g., get(simdir, \"orog\") in the previous example).","category":"page"},{"location":"","page":"Home","title":"Home","text":"Let us learn about OutputVars","category":"page"},{"location":"#OutputVar","page":"Home","title":"OutputVar","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"OutputVars contain the raw data (in .data), the attributes read from the file, and the information regarding the dimension over which the variable is defined.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ts_max.dims\nOrderedCollections.OrderedDict{String, Vector{Float32}} with 4 entries:\n  \"time\" => [10800.0, 21600.0, 32400.0, 43200.0]\n  \"lon\"  => [-180.0, -177.989, -175.978, -173.966, -171.955, -169.944, -167.933, -165.922…\n  \"lat\"  => [-80.0, -77.9747, -75.9494, -73.924, -71.8987, -69.8734, -67.8481, -65.8228, …\n  \"z\"    => [0.0, 5000.0, 10000.0, 15000.0, 20000.0, 25000.0, 30000.0, 35000.0, 40000.0, …","category":"page"},{"location":"","page":"Home","title":"Home","text":"Here we have the dimensions and their values. The dimensions are ordered as in the file, so that the first index of .data is time, and so on.","category":"page"},{"location":"","page":"Home","title":"Home","text":"We can find the attributes of the dimensions in .attributes:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ts_max.dim_attributes[\"lon\"]\n  \"lon\"  => Dict(\"units\"=>\"degrees_east\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"Some of the attributes are exposed with function calls. For example","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> long_name(ts_max)\n  Surface Temperature, max within 1.0 Hour(s)","category":"page"},{"location":"","page":"Home","title":"Home","text":"These function use the attributes in the NetCDF files. When not available, empty strings are returned.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Given an OutputVar, we can perform manipulations. For instance, we can take the average over latitudes:","category":"page"},{"location":"","page":"Home","title":"Home","text":"ts_max_lat_averaged = ClimaAnalysis.average_lat(ts_max)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Now,","category":"page"},{"location":"","page":"Home","title":"Home","text":"ts_max_lat_averaged.dims =\nOrderedCollections.OrderedDict{String, Vector{Float32}} with 3 entries:\n  \"time\" => [10800.0, 21600.0, 32400.0, 43200.0]\n  \"lon\"  => [-180.0, -177.989, -175.978, -173.966, -171.955, -169.944, -167.933, -165.922…\n  \"z\"    => [0.0, 5000.0, 10000.0, 15000.0, 20000.0, 25000.0, 30000.0, 35000.0, 40000.0, …","category":"page"},{"location":"","page":"Home","title":"Home","text":"We can also take a time/altitude slice, for example, the plane with altitude closest to 8000 meters.","category":"page"},{"location":"","page":"Home","title":"Home","text":"ts_max_lat_averaged_sliced = ClimaAnalysis.slice(ts_max_lat_averaged, 8_000)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Alternatively, you can also call ClimaAnalysis.slice(ts_max_lat_averaged_sliced, time = 8_000). Now,","category":"page"},{"location":"","page":"Home","title":"Home","text":"ts_max_lat_averaged_sliced.dims =\nOrderedCollections.OrderedDict{String, Vector{Float32}} with 2 entries:\n  \"time\" => [10800.0, 21600.0, 32400.0, 43200.0]\n  \"lon\"  => [-180.0, -177.989, -175.978, -173.966, -171.955, -169.944, -167.933, -165.922…","category":"page"},{"location":"#Mathematical-operations","page":"Home","title":"Mathematical operations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"OutputVars support the usual mathematical operations. For instance, if ts_max is an OutputVar, 2 * ts_max will be an OutputVar with doubled values.","category":"page"},{"location":"","page":"Home","title":"Home","text":"For binary operations (e.g., +, -, *, /), ClimaAnalysis will check if the operation is well defined (i.e., the two variables are defined on the physical space). Binary operations do remove some attribute information.","category":"page"},{"location":"#Visualize","page":"Home","title":"Visualize","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"We can directly visualize OutputVars.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If CairoMakie is available, ClimaAnalysis can be used for plotting. Importing CairoMakie and ClimaAnalysis in the same session automatically loads the necessary ClimaAnalysis plotting modules.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If we want to make a heatmap for ta_max at time of 100 s at altitude z of 30000 meters:","category":"page"},{"location":"","page":"Home","title":"Home","text":"import CairoMakie\nimport ClimaAnalysis.Visualize as viz\n\nfig = CairoMakie.Figure(resolution = (400, 600))\n\nviz.plot!(\n  fig,\n  ta_max,\n  time = 100.0,\n  z = 30_000.0\n)\n\nCairoMakie.save(\"ta_max.png\", fig)","category":"page"},{"location":"","page":"Home","title":"Home","text":"If we want to have a line plot, we can simply add another argument (e.g., lat = 30), to slice through that value.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you want to customize some of the properties, you can pass the more_kwargs to the plot! function. more_kwargs is a dictionary that can contain additional arguments to the Axis (:axis), plot (:plot), and Colorbar (:cb) functions. more_kwargs is a Dictionary that maps the symbols :axis, :plot, and :cb to their additional arguments. For instance, to choose the colormap for the colorbar to viridis","category":"page"},{"location":"","page":"Home","title":"Home","text":"viz.plot!(\n  fig,\n  ta_max,\n  time = 100.0,\n  z = 30_000.0,\n  more_kwargs = Dict(:cb => [:colormap => :viridis])\n)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note the Symbol in colormap!. :cb has to be a mapping of Symbols and values. ClimaAnalysis has a convenience function kwargs to more easily pass down the keyword arguments avoiding this step. With that, the above example becomes","category":"page"},{"location":"","page":"Home","title":"Home","text":"import ClimaAnalysis.Utils : kwargs as ca_kwargs\nviz.plot!(\n  fig,\n  ta_max,\n  time = 100.0,\n  z = 30_000.0,\n  more_kwargs = Dict(:cb => ca_kwargs(colormap = :inferno))\n)","category":"page"},{"location":"","page":"Home","title":"Home","text":"With Utils.kwargs, you can just pass the arguments as you would pass them to the constructor.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you need more control over the placement of plots, you can pass Makie.GridLayout objects to the plotting functions. For example,","category":"page"},{"location":"","page":"Home","title":"Home","text":"using CairoMakie\n\nfig = Figure()\nlayout = fig[1, 2] = GridLayout()\n\nviz.plot!(\n  layout,\n  ta_max,\n  time = 100.0,\n  z = 30_000.0,\n  more_kwargs = Dict(:cb => ca_kwargs(colormap = :inferno))\n)","category":"page"},{"location":"","page":"Home","title":"Home","text":"When you pass a GridLayout, the optional argument p_loc refers to the placement within the layout. When you pass a Figure, it refers to the placement within the figure.","category":"page"},{"location":"","page":"Home","title":"Home","text":"If you have GeoMakie and are working on a variable defined on a long-lat grid, you can directly plot on a projected global surface. For that, load GeoMakie and use the heatmap2D_on_globe! function.","category":"page"}]
}
