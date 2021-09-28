/* eslint-disable @typescript-eslint/typedef */
const gulp = require('gulp');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const project = typescript.createProject('tsconfig.json');
const eslint = require('gulp-eslint');
const del = require('del');

gulp.task('lint', () =>
    gulp.src('./src/**/*.ts').pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError())
);

gulp.task('build', async () => {
    del.sync(['dist/**/*.*']);
    const tsCompile = gulp
        .src('./src/**/*.ts')
        .pipe(sourcemaps.init({ base: 'src' }))
        .pipe(project());

    await tsCompile.pipe(gulp.dest('dist/'));

    gulp.src('./src/**/*.js').pipe(gulp.dest('dist/'));
    gulp.src('./src/**/*.json').pipe(gulp.dest('dist/'));
    gulp.src('./src/**/*.lang').pipe(gulp.dest('dist/'));
    
    return
    // return tsCompile.js.pipe(sourcemaps.write('.', { sourceRoot: './src' })).pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series('build'));
