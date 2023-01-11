import { mongooseObj } from '../../util/mongoose.js';
import { MyModel as CourseSchema } from '../models/Course.js';
class SiteController {
  index(req, res, next) {
    CourseSchema.find({})
      .then((courses) =>
        res.render('home', {
          courses: mongooseObj.multipleMongooseToObject(courses),
        })
      )
      .catch(next);
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
