import { BookOpen } from "lucide-react";
import Section from "./Section";
import Graduation from "./Graduation";

const Education = () => {
  return (
    <Section icon={<BookOpen />} sectionTitle={"Education"}>
      <Graduation
        title="Bachelor of Science in Computer Science"
        school="University of Technoloty"
        year="2015-2019"
      />

      <Graduation
        title="Full stack web Development Bootcamp"
        school="Code Academy"
        year="2020"
      />
    </Section>
  );
};

export default Education;
