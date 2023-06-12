
exports.login = (req, res) => {
    console.log('login....');
    res.send("Login route hit");
};

exports.signup = (req, res) => {
    console.log('signup....');
    res.send("signup route hit");
}