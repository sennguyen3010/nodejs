class SiteController {
  index(req, res) {
    res.render('home');
  }
  search(req, res) {
    res.render('query');
  }
}
export default new SiteController();
