# Changelog

## 1.6.0
- Added gauge chart
- Fixed source map file name
- Fixed bug where grid panels in grouped bar chart would have the wrong size and position

## 1.5.2
- Added fade in animation to charts
- Excluded d3 from the release bundle
- Decreased the pie grid doughnut width

## 1.5.1
- Fixed bug where view dimension feedback would enter into a loop due to float decimals
- Fixed bug where tree map would not call update on the base chart
- Switched legend label truncation to css ellipsis
- Added maximum height to legend, and scrollbars on overflow
- Added a count up animation to number cards
- Fixed advanced pie layout
- Updated pie grid layout and padding
- Refactored pie grid to use the pie arc component
- Updated testing framework

## 1.5.0
- Added force directed graph chart (#64)
- Fixed bug where tooltip would not work when library is used in an angular 1 application using ngUpgrade
- Fixed tooltip positioning
- Added line interpolation option for line and area charts (#52)
- Updated view dimension calculation to properly take into account the width and height of the axis tick labels.
- Various bug fixes and code style fixes

## 1.4.0
- Chore: Upgrade Webpack 2.25
- Chore: Remove rollup in favor of webpack builds

## 1.3.0
- Added option to resize charts to fit containers if `view` property is not set (#44)
- Fixed legend size and positioning (#47)
- Added scale legend to heat map chart
- Added option to show/hide the grid lines on the chart (#53)
- Added support for negative values in bar charts (#17)
- Fixed bug with reduce call (#56)
- Changed the tooltip to be hidden initially in order to avoid overflow and scrollbars. (#57)
- Fixed AOT bugs (#46)

## 1.2.2
- Added AOT compilation support
- Fixed bug where BrowserModule was imported multiple times

## 1.2.1
- Added transition animation to TreeMap chart
- Added tooltips to TreeMap, Line, Area, and Pie Grid charts
- Fixed TreeMap click event
- Updated TreeMap label positioning and style
- Changed the starting opacity of bars in bar chart
- Updated the circles behavior on Line and Area charts

## 1.2.0
- Added Tooltips to charts
- Added TreeMap chart

## 1.1.0
- Upgraded to Angular 2.0.0
- Upgraded to TypeScript 2.0.2
- Added timeline line and area charts
- Removed margin from inputs
- Prevented charts from double rendering on init
- Added transition animations to pie, line and area charts, and updated transitions on bar charts

## 1.0.1
- Implemented smart axis labels (#32)
- Upgraded D3 to 4.0 (#6)

## 1.0.0
- Initial release
