import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
const { Schema } = mongoose;

mongoose.plugin(slug);

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
    level: { type: String },
    videoId: { type: String, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
  },
  { timestamps: true }
);

export const MyModel = mongoose.model('Course', CourseSchema);

// export { Courses };
