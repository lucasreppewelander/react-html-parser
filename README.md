# react-replace-html

Replace HTML with react components

[![Build Status](https://travis-ci.org/lucasreppewelander/react-html-parser.svg?branch=main)](https://travis-ci.org/lucasreppewelander/react-html-parser)
[![npm package][npm-badge]][npm]
[![Coverage Status](https://coveralls.io/repos/github/lucasreppewelander/react-html-parser/badge.svg?branch=main)](https://coveralls.io/github/lucasreppewelander/react-html-parser?branch=main)

[npm-badge]: https://img.shields.io/npm/dw/react-replace-html?style=flat
[npm]: https://www.npmjs.org/package/npm-package

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

## License

[MIT](https://github.com/lucasreppewelander/react-html-parser/blob/main/LICENSE)
