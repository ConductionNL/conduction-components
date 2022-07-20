import * as React from "react";
import * as styles from "./Tag.module.css";
import StepProgressBar from "react-step-progress";

interface ProgressPhaseStatusProps {
  steps: { label: string; name: string }[];
}

export const ProgressPhaseStatus: React.FC<ProgressPhaseStatusProps> = ({ steps }) => {
  return (
    <div className="App">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Briefing",
            name: "Briefing",
            content: step1Content,
          },
          {
            label: "Image-Acquisition",
            name: "Image-Acquisition",
            content: step2Content,
          },
          {
            label: "Image-processing",
            name: "Image Processing",
            content: step3Content,
            validator: step2Validator,
          },
          {
            label: "Finish",
            name: "Finish",
            content: step3Content,
          },
        ]}
      />
    </div>
  );
};
