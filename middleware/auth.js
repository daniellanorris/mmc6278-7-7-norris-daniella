function checkAuth(req, res, next) {
	if (req.session && req.session.loggedIn) {
		return next()
	}
	res.redirect('/login').send('User not authenticated')
}

module.exports = checkAuth
