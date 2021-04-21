const fs = require('fs')
const path = require('path')

const config = {
    jsDir: 'leetcode'
}

class Js2MdTransformer {

    start() {
        this.copyDirRecursive(config.jsDir)
    }

    copy(fullPath) {
        const jsCode = fs.readFileSync(fullPath, 'utf-8')

        jsCode = `/`/`/`\n${jsCode}/`/`/`\n`

        fs.
    }

    transformer() {
        
    }

    copyDirRecursive(sourceDir) {
        fs.readDir(path.join(__dirname, sourceDir), (err, paths) => {

            paths.map(p => {
                const fullPath = path.join(sourceDir, p)
                
                fs.stat(fullPath, (err, stats) => {
                    if(stats.isDirectory()) {
                        this.copyDirRecursive(fullPath)
                    } else {
                        
                    }
                })
            })
        })
    }

}