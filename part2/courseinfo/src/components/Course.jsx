const Course = ({course, total}) => {

    const Header = () => {
        return <h1>{course.name}</h1>;
      };
    
      const Content = () => {
        return (
          <div>
            {course.parts.map(part => (
              <p key={part.id}>{part.name} {part.exercises}</p>
            ))}
          </div>
        );
      };
    
      const Total = () => {
        return <h2>Total exercises: {total}</h2>;
      };
    
      return (
        <>
          <Header />
          <Content />
          <Total />
        </>
      );
};



export default Course