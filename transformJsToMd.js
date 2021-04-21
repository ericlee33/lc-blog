const fs = require('fs');
const path = require('path');

const config = {
    jsDir: 'leetcode',
    destDir: './src',
};

const utils = {
    checkIsDirExists(dir) {
        return new Promise((resolve, reject) => {
            fs.stat(dir, async (err, stats) => {
                if (err) {
                    await this.mkDir(dir);
                    reject(err);
                }

                resolve();
            });
        });
    },
    mkDir(dir) {
        return new Promise((resolve, reject) => {
            fs.mkdir(dir, err => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    },
};

class Js2MdTransformer {
    /** 入口函数 */
    start() {
        const dirname = path.join(__dirname, config.jsDir);
        this.copyDirRecursive(dirname);
    }

    async copy(fullPath) {
        const parsedPath = path.parse(fullPath);
        console.log(parsedPath);
        let cur = '';
        let jsCode = fs.readFileSync(fullPath, 'utf-8');

        try {
            /** 最后一项是文件名称，不考虑在内 */
            await utils.checkIsDirExists(path.join(__dirname, config.destDir, config.jsDir));
        } catch (err) {
            console.error(err);
        }

        jsCode = '```js\n' + jsCode + '```\n';
        console.log(fullPath);

        fs.writeFileSync(
            path.join(__dirname, config.destDir, config.jsDir, `${parsedPath.name}.md`),
            jsCode,
        );
    }

    transformer() {}

    copyDirRecursive(sourceDir) {
        fs.readdir(sourceDir, (err, paths) => {
            paths.map(p => {
                const fullPath = path.join(sourceDir, p);

                fs.stat(fullPath, (err, stats) => {
                    console.log();
                    if (stats && stats.isDirectory()) {
                        this.copyDirRecursive(fullPath);
                    } else {
                        this.copy(fullPath);
                    }
                });
            });
        });
    }
}

const transformer = new Js2MdTransformer();

transformer.start();
