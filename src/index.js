import * as $ from 'jquery'
import Post from './Post'
import json from './assets/json.json'
import xml from './assets/data.xml'
import Wlogo from './assets/logo.png'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import './babel.js'

const post = new Post('Webpack Post Title', Wlogo)

$('pre').addClass('code').html(post.toString())

// console.log('Post to String:', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)