#Theme's
This project is setup to allow for custom theming of the app, albeit in a somewhat rudimentary way.

There are two default theme's to choose from. Light and Dark. 

If you would like to make your own theme just copy light.js or dark.js and modify as you like.

## Palette
The palette should primarily be used in `const theme` as theme is primarily in charge of giving the app
the color scheme it has. Modifying the components to use `{ pallet }` is generally frowned upon as it 
creates more than one location to handle color styling.

## Theme
Theme's are really just color settings for the app, using the `pallet` to create a color scheme for the app.
Putting attributes like `width` and `height` or other layout changes with `flex` are highly frowned up.


__The app already has specific layouts defined for the various platforms__

The accepted attributes are:
- `color`
- `backgroundColor`
- `opacity`
- `fontSize`
- `fontWeight`
- `fontFamily`
- `border` widths, radius and colour
