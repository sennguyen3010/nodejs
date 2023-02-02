import { mongooseObj } from '../../util/mongoose.js';
import { MyModel as CourseSchema } from '../models/Course.js';

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    CourseSchema.find({})
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: mongooseObj.multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

export default new MeController();
