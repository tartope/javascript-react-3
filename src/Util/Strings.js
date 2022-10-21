//
// File: Strings.js
// Auth: Martin Burolla
// Date: 10/20/2022
// Desc: All handy string functions.
//

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
