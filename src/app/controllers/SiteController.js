import Course from '../models/Course.js';
class SiteController {
  index(req, res) {
    Course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: 'ERR!!!' });
      }
    });
  }
  search(req, res) {
    res.render('query');
  }
}
// export const getSite = async (req, res, next) => {
//   try {
//     const site = await Course.find();
//     res.status(200).json(site);
//   } catch (error) {
//     next(err);
//   }
// };
export default new SiteController();
