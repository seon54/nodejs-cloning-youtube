export const join = (req, res) => res.render("join", { pageTitle: 'Join' });
export const login = (req, res) => res.render("login", { pageTitle: 'Log in' });
export const logout = (req, res) => res.render("logout", { pageTitle: 'Log out' });
export const users = (req, res) => res.serendernd("users", { pageTitle: 'User' });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: 'User Detail' });
export const changePassword = (req, res) => res.render("changePwd", { pageTitle: 'Change Password' });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: 'Edit Profile' });