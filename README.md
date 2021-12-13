# babel-plugin-inject-import

Babel plugin to inject some custom `import` statement.

# Usage

### Via `.babel.config.json` (Recommended)

**.babel.config.json**
```js
{
    "plugins": [
        [
            "inject-import", 
            {
                "inject": [{
                    "name": null,
                    "path": "./style.css",
                    "file": "src/GanttReact/index.js"
                },{
                    "name": "test",
                    "path": "test",
                    "file": "src/GanttReact/index.js"
                }]
            }
        ]
    ]
}
```