import React, { useEffect, useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const App = () => {
  const [view, setView] = useState('book');

  useEffect(() => {
    alert("Same content rendered for 3 times for conditional rendering. Check code to understand.");
  }, []);

  return (
    <div>
      <h1>📚 Blogger App</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setView('book')}>Show Book</button>
        <button onClick={() => setView('blog')}>Show Blog</button>
        <button onClick={() => setView('course')}>Show Course</button>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1, border: '1px solid black', padding: '10px' }}>
          <h3>📘 Ternary Operator</h3>
          {view === 'book' ? (
            <BookDetails />
          ) : view === 'blog' ? (
            <BlogDetails />
          ) : (
            <CourseDetails />
          )}
        </div>

        <div style={{ flex: 1, border: '1px solid black', padding: '10px' }}>
          <h3>📗 Logical AND (&&)</h3>
          {view === 'book' && <BookDetails />}
          {view === 'blog' && <BlogDetails />}
          {view === 'course' && <CourseDetails />}
        </div>

        <div style={{ flex: 1, border: '1px solid black', padding: '10px' }}>
          <h3>📙 Switch Statement</h3>
          {(() => {
            switch (view) {
              case 'book':
                return <BookDetails />;
              case 'blog':
                return <BlogDetails />;
              case 'course':
                return <CourseDetails />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default App;
