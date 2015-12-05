(function(module) {
    module.exports = function(argv) {
        argv
        .usage('plex-api.js <command> [options]')
        .demand(1, 'Please specify command')
        .command('test', 'tis a mighty fine idea to test')
        .command('migrate', 'tis a mighty fine to be able to migrate')

        return argv;
    };
})(module);