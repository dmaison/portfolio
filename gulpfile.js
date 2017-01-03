var gulp    = require( 'gulp' );
var uglify  = require( 'gulp-uglify' );
var gulpIf  = require( 'gulp-if' );
var useref  = require( 'gulp-useref' );
var cssnano = require( 'gulp-cssnano' );

gulp.task( 'default', function() {
    
    return gulp
        .src( 'client/index.html' )
        .pipe( useref({ searchPath: 'client' }) )
        .pipe( gulpIf( '*.js', uglify() ) )
        .pipe( gulpIf( '*.css', cssnano() ) )
        .pipe( gulp.dest( 'client' ) );
    
});