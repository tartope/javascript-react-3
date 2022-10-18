//
// File: atoms.js
// Auth: Martin Burolla
// Date: 10/14/2022
// Desc: Contains all global state for the application.
//

import { atom } from 'recoil'

//
// Usage: 
//
// Desc:
//   A playlist has a unique Id assigned to it. The Mp3Player allows users to 
//   add songs to the active playlist.  The Mp3PlaylistManager sets the active playlist.
//   Currently, all of the playlists are stored in local storage.
//
export const lemonadeCounter = atom({
    key: 'lemonadeCounter',
    default: 1
})
