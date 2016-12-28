var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));
gulp.task('deploy', function() {
  var remotePath = '/public_html/test2';
  var conn = ftp.create({
    host: 'quantsa.org',
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  gulp.src(['index.html', '.site/**/*.html'])
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});