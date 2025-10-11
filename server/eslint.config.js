export default [
    {
        files: ['**/src/**/*.js'], // check all js files in src directory and subdirectories
        rules: {
            // semi: "error",
            'no-unused-vars': 'warn', // warn if variables are not used in the code
        },
    },
];
