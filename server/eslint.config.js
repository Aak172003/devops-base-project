export default [
    {
        // check all js files in src directory and subdirectories
        files: ['**/src/**/*.js'],
        rules: {
            // semi: "error",

            // warn if variables are not used in the code
            'no-unused-vars': 'warn',
            "dot-notation": "error"
        },
    },
];
