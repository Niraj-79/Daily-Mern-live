import { Code } from "lucide-react";
import Section from "./Section";
import Pill from "./Pill";

const Skills = () => {
  const skillTitles = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"]
  return (
    <Section icon={<Code />} sectionTitle={"Skills"}>
      {skillTitles.map(title => <Pill title={title} />)}
    </Section>
  );
};

export default Skills;
