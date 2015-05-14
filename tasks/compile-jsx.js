module.exports = function (gulp, plugins) {
    return plugins.shell.task([
        'jsx --watch /scripts /build'
    ]);
};

