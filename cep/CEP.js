async function executeScript(name, ...params) {
    const scriptCall = `${name}(${params.map((param) => param.toString()).join(",")})`;
    
    return new Promise((resolve, reject) => {
        window.__adobe_cep__.evalScript(scriptCall, function(data) {
            if(data === "Eval script error") {
                reject(data);
            }
            else if(data == null) {
                resolve(null);
            }
            else if(data instanceof String) {
                resolve(data);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
}

class Runner {
    constructor(name) {
        const namespace = `$.${name}.`

        return new Proxy(this, {
            get(target, prop) {
                return function(...args) {
                    return executeScript(namespace + prop, ...args);
                };
            }
        });
    }
}

function createRunner(name) {
    return new Runner(name);
}