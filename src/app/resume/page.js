import ResumeHeader from "@/components/ResumePageComponents/ResumeHeader";
import ResumeEducation from "@/components/ResumePageComponents/ResumeEducation";
import ResumeSkills from "@/components/ResumePageComponents/ResumeSkills";
import ResumeProjects from "@/components/ResumePageComponents/ResumeProjects";
import ResumeExperience from "@/components/ResumePageComponents/ResumeExperience";
import DownloadButton from "@/components/ResumePageComponents/DownloadButton";

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-100">
      <ResumeHeader />
      <DownloadButton />
      <ResumeEducation />
      <ResumeSkills />
      <ResumeProjects />
      <ResumeExperience />
    </div>
  );
}
