import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAttraction from './components/AddAttraction';
import AddVisitor from './components/AddVisitor';
import PostReview from './components/PostReview';
import ListAttractions from './components/ListAttractions';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListAttractions />} />
        <Route path="/add-attraction" element={<AddAttraction />} />
        <Route path="/add-visitor" element={<AddVisitor />} />
        <Route path="/post-review" element={<PostReview />} />
      </Routes>
    </Router>
  );
};

export default App;
