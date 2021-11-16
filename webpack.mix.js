const mix = require('laravel-mix');
mix.js('src/resources/js/app.js', 'src/public/js/script.js')
    .sass('src/resources/scss/app.scss', 'src/public/css/style.css');