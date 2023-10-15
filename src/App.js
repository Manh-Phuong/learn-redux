
import './App.css';
import Counter from './Counter/Counter';
import TaskManager from './TaskManager/TaskManager';
import Upload from './Upload/Upload';
import UploadWidget from './Upload/UploadWidget';
import ImageUpload from './Upload/ImageUpload';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <TaskManager /> */}
      {/* <Upload /> */}
      <UploadWidget />
      <ImageUpload />
    </div>
  );
}

export default App;
