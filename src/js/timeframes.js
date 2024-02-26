const CURRENT_YEAR = new Date().getFullYear();

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

Array.from( document.querySelectorAll( '[data-age]' ) ).forEach( ( elem ) => {
    elem.replaceWith( CURRENT_AGE );
});

Array.from( document.querySelectorAll( '[data-total-experience]' ) ).forEach( ( elem ) => {
    elem.replaceWith( EXPERIENCE_TOTAL_YEARS );
});