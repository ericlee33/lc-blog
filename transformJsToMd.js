const fs = require('fs');
const path = require('path');

const config = {
    jsDir: 'leetcode',
    destDir: './src',
};

/**
 * 工具类
 */
const utils = {
    checkIsDirExists(dir) {
        return new Promise((resolve, reject) => {
            fs.stat(dir, async (err, stats) => {
                /**
                 * 如果找不到，证明不存在，需要创建dir
                 */
                if (err) {
                    await this.mkDir(dir);
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
        this.traverseDir(dirname);
    }

    async transformJs2Md(fullPath) {
        const parsedPath = path.parse(fullPath);
        let cur = '';
        let jsCode = fs.readFileSync(fullPath, 'utf-8');

        try {
            await utils.checkIsDirExists(path.join(__dirname, config.destDir, config.jsDir));
        } catch (err) {
            console.error(err);
        }

        /**
         * 拼接js为高亮md代码块
         */
        jsCode = '```js\n' + jsCode + '```\n';

        fs.writeFileSync(
            path.join(__dirname, config.destDir, config.jsDir, `${parsedPath.name}.md`),
            jsCode,
        );
    }

    /**
     * 递归copy
     */
    traverseDir(sourceDir) {
        fs.readdir(sourceDir, (err, paths) => {
            paths.map(p => {
                const fullPath = path.join(sourceDir, p);

                fs.stat(fullPath, (err, stats) => {
                    if (stats && stats.isDirectory()) {
                        this.traverseDir(fullPath);
                    } else {
                        this.transformJs2Md(fullPath);
                    }
                });
            });
        });
    }
}

const transformer = new Js2MdTransformer();

transformer.start();
