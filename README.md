# react-replace-html

Replace HTML with react components

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Installation

```
npm install --save react-replace-html
```

## Usage

```
import parse from 'react-replace-html';

function RedComponent(props) {
	return <span style={{ color: 'red', fontStyle: 'italic' }}>
		{props.children} 🍕
	</span>
}

const html = '<h3>Title</h3><p>Lorem <span class="red">ipsum</span> <span class="blue">dolor</span> sit amet</p>';

const replacer = (tag, props) => {
	if (tag === 'span' && props.class === 'red') {
		return <RedComponent {...props} />
	}

	return React.createElement(tag, props);
}

parse(html, replacer);
```

### Replacer function

#### replacer(tag, props)

```
const replacer = (tag, props) => {
	if (tag === 'span' && props.class === 'red') {
		return <RedComponent {...props} />
	}

	return React.createElement(tag, props);
}
```
