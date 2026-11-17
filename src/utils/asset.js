// Prefix a /public file path with the site's base URL, so images work both
// at a domain root (cPanel: "/") and in a sub-folder (GitHub Pages: "/MechthudiyalurPumo/").
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '');
