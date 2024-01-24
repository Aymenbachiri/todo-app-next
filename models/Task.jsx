import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const taskSchema = new Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
