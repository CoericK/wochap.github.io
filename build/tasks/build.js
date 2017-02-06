// run webpack with production config
// build static html files
// generate service-worker with sw-precache

process.env.NODE_ENV = 'production'

import webpack from 'webpack'
import ora from 'ora'
import path from 'path'
import shelljs from 'shelljs'
import swPrecache from 'sw-precache'

import webpackConfigProd from '../webpack/config.prod.babel'
import webpackConfigProdPreStatic from '../webpack/config.prod-pre-static.babel'
import webpackConfigProdStatic from '../webpack/config.prod-static.babel'
import {projectRootPath, projectAssetsPath, projectDistPath, projectPublicPath} from '../config'

let firstSpiner = ora('Building for production...')
let secondSpiner = ora('Building static markup...')

firstSpiner.start()

// delete dist folder
shelljs.rm('-rf', projectDistPath)
shelljs.mkdir('-p', projectDistPath)

// copy public folder to dist folder
shelljs.cp('-R', `${projectPublicPath}/*`, projectDistPath)

// run webpack with prod config
webpack(webpackConfigProd).run((err, stats) => {
  firstSpiner.stop()

  if (err) throw err

  // log stats
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')

  console.log('\n')
  secondSpiner.start()

  // pre build static markup
  webpack(webpackConfigProdPreStatic).run((err, stats) => {

    if (err) throw err

    // log stats
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')

    // build static markup
    webpack(webpackConfigProdStatic).run((err, stats) => {
      secondSpiner.stop()

      if (err) throw err

      // log stats
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n')

      // delete temporary build folders
      shelljs.rm('-rf', path.join(projectDistPath, '_static'))
      shelljs.rm('-rf', path.join(projectDistPath, 'dist'))

      // generate service worker
      swPrecache.write(`${projectDistPath}/service-worker.js`, {
        cacheId: 'wochap',

        // ensure all our static, local assets will be cached in background
        staticFileGlobs: [
          // `${projectDistPath}/**/!(*map*)`,
          `${projectDistPath}/about/**/*`,
          `${projectDistPath}/blog/**/*`,
          `${projectDistPath}/contact/**/*`,
          `${projectDistPath}/static/css/**/!(*map*)`,
          `${projectDistPath}/static/fonts/**/*`,
          // `${projectDistPath}/static/images/tacna.jpg`,
          // `${projectDistPath}/static/images/works/*`,
          `${projectDistPath}/static/js/**/!(*map*)`,
          // `${projectDistPath}/static/cv_es.pdf`,
          `${projectDistPath}/works/**/*`,
          `${projectDistPath}/404.html`,
          `${projectDistPath}/app-manifest.json`,
          `${projectDistPath}/index.html`
        ],
        stripPrefix: projectDistPath,

        runtimeCaching: [
          {
            handler: 'cacheFirst',
            urlPattern: /.(svg|eot|ttf|woff|woff2)$/
          }, {
            handler: 'fastest',
            urlPattern: /.(png|jpg|jpeg|gif)$/
          }, {
            handler: 'networkFirst',
            urlPattern: /.pdf$/
          }
        ],

        verbose: true
      })
    })
  })
})
