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
    del.sync(['dist/**/*.*', 'types/**/*.*']); // delete old code, then rebuild
    const tsCompile = gulp
        .src('./src/**/*.ts')
        .pipe(sourcemaps.init({ base: 'src' }))
        .pipe(
            project({ declaration: true, noLibCheck: true, experimentalDecorators: true, outDir: './types' })
        )
        .on('error', console.log);
    gulp.src('./src/**/*.js').pipe(gulp.dest('dist/'));
    gulp.src('./src/**/*.json').pipe(gulp.dest('dist/'));
    gulp.src('./src/**/*.lang').pipe(gulp.dest('dist/'));

    return [
        tsCompile.dts.pipe(gulp.dest('types/')),
        tsCompile.js.pipe(sourcemaps.write('.', { sourceRoot: './src' })).pipe(gulp.dest('dist/')),
    ];
});

// like tsc -w
gulp.task('watch', async () => {
    gulp.watch('/src/**/*.ts', () => gulp.series('build')());
});

// if no args are passed, run build
gulp.task('default', gulp.series('build'));
