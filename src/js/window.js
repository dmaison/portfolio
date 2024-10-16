/**
 * Breaks the viewport into quadrants and determines
 * which quadrant the provided element belongs to
 * @param {object} coords Screen coordinates
 * @returns {number} Quadrant the element exists in
 */
export const getQuadrant = ( x, y ) => {
	const { innerWidth, innerHeight } = window,
		centerX = ( innerWidth / 2 ),
		centerY = ( innerHeight / 2 );

    return [ 
        Math.round( ( ( x - centerX ) / centerX ) * 100 / 50 ),
        Math.round( ( ( y - centerY ) / centerY ) * 100 / 50 )
    ]
};