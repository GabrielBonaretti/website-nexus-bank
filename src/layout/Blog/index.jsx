// Importing the Feedback component
import Feedback from "../../components/Feedback";

// Importing styled components for the Blog component
import { ContainerBlog } from "./style";

// Functional component for a blog section with feedback entries
const Blog = () => {
  // Rendering a styled container div for the blog section
  return (
    <ContainerBlog>
      {/* Displaying feedback with specified text, image, name, and role */}
      <Feedback
        textBrief='"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."'
        srcImage="src\assets\images\ProfilePic3.svg"
        name="Gabriel Bonaretti"
        role="Mais lindo de Campinas e região"
      />

      {/* Displaying feedback with specified text, image, name, and role */}
      <Feedback
        textBrief='"It is both attractive and highly adaptable. It is exactly what I have been looking for. Definitely worth the investment."'
        srcImage="src\assets\images\ProfilePic2.svg"
        name="Vanessa Silva"
        role="Back-end"
      />

      {/* Displaying feedback with specified text, image, name, and role */}
      <Feedback
        textBrief='"I am really satisfied with it. I am good to go. It really saves me time and effort. It is exactly what our business has been lacking."'
        srcImage="src\assets\images\ProfilePic1.svg"
        name="O Felime Meira"
        role="UI/UX Designer"
      />
    </ContainerBlog>
  );
};

// Exporting the Blog component for use in other parts of the application
export default Blog;
