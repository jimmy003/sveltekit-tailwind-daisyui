const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-fb7c1f75.js","js":["start-fb7c1f75.js","chunks/vendor-e9112599.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/pages\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/pages/index.json.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/pages\/([^/]+?)\.json$/,
				params: (m) => ({ slug: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/pages/_slug_.json.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/posts\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/posts/index.json.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/posts\/([^/]+?)\.json$/,
				params: (m) => ({ slug: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/posts/_slug_.json.js'))
			},
			{
				type: 'page',
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				a: [0,4],
				b: [1]
			}
		]
	}
});
