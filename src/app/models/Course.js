import mongoose from 'mongoose';

const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

export default mongoose.model('Course', CourseSchema);

// export { Courses };
