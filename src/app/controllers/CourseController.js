import { mongooseObj } from '../../util/mongoose.js';
import { MyModel as CourseSchema } from '../models/Course.js';

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {
    CourseSchema.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', {
          course: mongooseObj.mongooseToObject(course),
        });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [GET] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new CourseSchema(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch((err) => {});
  }
}

export default new CourseController();
