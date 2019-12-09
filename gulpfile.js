const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const concat = require('gulp-concat');

gulp.task('watch', function(){
    const watcher = gulp.watch('public/js/**/*.js');
    watcher.on('change', function(event){
        console.log('File: ' + event.path + ' was changed!');
    });
});

gulp.task("uglify", function () {
    return gulp.src("public/js/**/*.js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("public/dist/"));
});

gulp.task('templates', function(){
   return gulp.src('views/*.hbs')
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: 'MyApp.templates',
        noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('build/'));
  });

gulp.task('default', function(){
    console.log('Gulp is running correctly!');
});