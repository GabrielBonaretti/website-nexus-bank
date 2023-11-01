import Feedback from "../../components/Feedback";
import { ContainerBlog } from "./style";

const Blog = () => {
  return (
    <ContainerBlog>
      <Feedback
        textBrief='"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."'
        srcImage="src\assets\images\ProfilePic3.svg"
        name="Gabriel Bonaretti"
        role="Mais lindo de campinas e regiao"
      />

      <Feedback
        textBrief='"It is is both attractive and highly adaptable. It is exactly what I have been looking forefinitely wo lorem ipsum dolorth the investment."'
        srcImage="src\assets\images\ProfilePic2.svg"
        name="Vanessa Silva"
        role="Back-end"
      />

      <Feedback
        textBrief='"I am really satisfied with it. I am good to go. It really saves me time and effort. It is is exactly what our business has been lacking. "'
        srcImage="src\assets\images\ProfilePic1.svg"
        name="O Felime Meira"
        role="UIUX Designer"
      />
    </ContainerBlog>
  );
};

export default Blog;
