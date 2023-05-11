const CURRENT_YEAR = new Date().getFullYear();

/**
 * URL of my full resume
 * @type {string}
 */
export const HREF_RESUME = "https://docs.google.com/document/d/1Oja47J59hTHABMFnyOLPXzgWcLodwdD6YxH1nV6CJaQ/edit?usp=sharing";

/**
 * URL of my music
 * @type {string}
 */
export const HREF_BANDCAMP = "https://davidmaison.bandcamp.com/"

/**
 * Year I was born
 * @type {number}
 */
export const BIRTH_YEAR = 1987;

/**
 * How old I am
 * @type {number}
 */
export const CURRENT_AGE = Math.floor( CURRENT_YEAR - BIRTH_YEAR );

/**
 * First year of professional development work
 * @type {number}
 */
export const EXPERIENCE_FIRST_YEAR = 2006;

/**
 * Calculation of total years of professional experience
 * @type {number}
 */
export const EXPERIENCE_TOTAL_YEARS = Math.floor( CURRENT_YEAR - EXPERIENCE_FIRST_YEAR );