const CURRENT_YEAR = new Date().getFullYear();

/**
 * @name BIRTH_YEAR
 * @constant
 * @description Year I was born
 */
export const BIRTH_YEAR = 1987;

/**
 * @name CURRENT_AGE
 * @constant
 * @description Year I was born
 */
export const CURRENT_AGE = Math.floor( CURRENT_YEAR - BIRTH_YEAR );

/**
 * @name EXPERIENCE_FIRST_YEAR
 * @constant
 * @description First year of professional development work
 */
export const EXPERIENCE_FIRST_YEAR = 2006;

/**
 * @name EXPERIENCE_TOTAL_YEARS
 * @constant
 * @description Calculation of total years of professional experience
 */
export const EXPERIENCE_TOTAL_YEARS = Math.floor( CURRENT_YEAR - EXPERIENCE_FIRST_YEAR );