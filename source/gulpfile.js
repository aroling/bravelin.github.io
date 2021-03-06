var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    autoprefixer = require('gulp-autoprefixer');

var raw_css = 'src/sass',
    com_css = 'src/styles';

//处理scss
gulp.task('sass', function() {
    return sass(raw_css + '/**/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0','Firefox >=20'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest(com_css));
});

//清理
gulp.task('clean', function () {
    return gulp.src(['dist/*', 'src/styles/*'], {read: false})
        .pipe(clean());
});

//启动server
gulp.task('connect', function () {
    connect.server({
        port: 8089
    });
});

//监控改变
gulp.task('watch', function (){
    gulp.watch(raw_css + '/**/*.scss', ['sass']);
});

gulp.task('default', function () {
    gulp.run(['clean','sass','watch', 'connect']);
});

// 删除之前的构建
var distPath = 'D:/blog/bravelin.github.io' // 部署目录

//清理 webroot/spa
gulp.task('clean-pub', function () {
    return gulp.src([distPath+'/static/*', distPath+'/app*.css', distPath+'/index.html'], {read: false})
        .pipe(clean({ force: true }));
});

gulp.task('pub-dist', function(){
    exists('dist', distPath, copy );
})

gulp.task('pub', function (callback) {
    runSequence('clean-pub','pub-dist',callback);
});

//////////////////////////////////////////////////////////////
var fs = require('fs'),
    stat = fs.stat;
/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var copy = function( src, dst ){
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( path ){
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;
            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile() ){
                    // 创建读取流
                    readable = fs.createReadStream( _src );
                    // 创建写入流
                    writable = fs.createWriteStream( _dst );
                    // 通过管道来传输流
                    readable.pipe( writable );
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory() ){
                    exists( _src, _dst, copy );
                }
            });
        });
    });
};

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function( src, dst, callback ){
    fs.exists( dst, function( exists ){
        // 已存在
        if( exists ){
            callback( src, dst );
        }
        // 不存在
        else{
            fs.mkdir( dst, function(){
                callback( src, dst );
            });
        }
    });
};
