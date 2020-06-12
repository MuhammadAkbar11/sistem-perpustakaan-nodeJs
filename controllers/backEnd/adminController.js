exports.dashboard = (req, res, next) => {
	res.render('backEnd/admin/dashboard', {
		pageTitle: 'Dashboard',
		path: 'administrator/dashboard',
		editing: false,
	});
};
