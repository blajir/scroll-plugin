const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('webserver', () => {
  gulp.src('')
    .pipe(webserver({
      host: 'localhost',
      port: 8080,
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['webserver']);
