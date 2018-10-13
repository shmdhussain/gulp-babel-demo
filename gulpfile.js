var gulp = require('gulp');
var babel = require('gulp-babel');

// Development Tasks 
// -----------------


//babel tasks
gulp.task('js', function(){
    return gulp.src(['app/preCompileJs/**/*.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('app/js'));
});


//babel tasks
gulp.task('js2', function(){
    return gulp.src(['app/preCompileJs/common/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('app/js2'));
});