module.exports = api => {
    const presets = [
        [
            '@babel/preset-env',
            {
                debug: false,
                targets: {
                    browsers: [
                        'last 3 versions',
                    ],
                    node: 'current',
                },
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ];

    const plugins = [];

    return {
        plugins,
        presets,
    };
};
