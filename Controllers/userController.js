import routes from "../routes"

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: 'Join' });
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: 'Join' });
    } else {
        // To Do : 사용자 등록, 사용자 로그인
        res.redirect(routes.home);
    }
};
export const getLogin = (req, res) => res.render("login", { pageTitle: 'Log in' });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}
export const logout = (req, res) => {
    res.redirect(routes.home);
}
export const users = (req, res) => res.serendernd("users", { pageTitle: 'User' });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: 'Edit Profile' });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: 'User Detail' });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: 'Change Password' });