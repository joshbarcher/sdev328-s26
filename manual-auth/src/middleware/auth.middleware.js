
export const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        return next(); //move on to other routers + middleware
    }
    return res.redirect("/login");
}