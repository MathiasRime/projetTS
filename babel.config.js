module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
            '@babel/preset-typescript',
    ],
};



if (typeof ED === "undefined") {
    ED = {
        __namespace: true
    };
}


