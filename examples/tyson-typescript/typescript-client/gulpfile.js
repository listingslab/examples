// VARS **MUST UPDATE**

// SMELL: Resolve issue for deploying from source whilst clearing generated
var destCSS     = './build/css/',
    destJS      = './build/js/',
    destPHTML   = './build/typescript/',
    phtmlFiles  = './build/**/*.phtml';


// DEPENDENCIES
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    ts = require('gulp-typescript');


// SMELL: Resolve issue when doing locally not within client environment
// don't want to be copying admin files to parents that don't exist

// TASK: COPY  ** COPY ./PUB and ADD ALL PHTML FILES **
gulp.task('copy', function(){
    gulp.src('./src/html/**/*.html').pipe(gulp.dest( './pub/' ));
    gulp.src('./pub/typescript.css').pipe(gulp.dest( destCSS ));
    gulp.src('./pub/typescript.js').pipe(gulp.dest( destJS ));
    gulp.src( phtmlFiles ).pipe(gulp.dest( destPHTML ));
});


// TASK: CSS
gulp.task('css', function() {
    gulp.src('./src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('typescript.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest( './pub/' ));
});


// TASK: TS
gulp.task('ts', function () {
    gulp.src('./src/ts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            removeComments: true,
            preserveConstEnums: true,
            outFile: 'typescript.js'
        }))
        .pipe(gulp.dest( './pub/' ));
});


// TASK: LIVE RELOAD
gulp.task('livereload', function() { livereload.changed() });


// TASK: WATCH
gulp.task('watch', ['css','ts','copy'], function() {
    isWatching = true;
    livereload.listen();

    // Watch SCSS and CSS for changes, compile and run livereload on change
    gulp.watch('./src/scss/**/*.scss', ['css']);
    gulp.watch(destCSS + outputCSS, livereload.changed);

    // Watch TS and JS for changes, compile and run livereload on change
    gulp.watch('./src/ts/**/*.ts', ['ts']);
    gulp.watch(destJS + outputJS, livereload.changed);
});


// TASK: DEFAULT
gulp.task('default', ['css','ts','copy']);
