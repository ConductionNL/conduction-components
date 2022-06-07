import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Step, StepExpandedIcon, StepHeader, StepHeading, StepList, StepMarker, StepSection, SubStep, SubStepHeading, SubStepList, SubStepMarker, } from "@gemeente-denhaag/process-steps";
export const StatusSteps = ({ steps }) => {
    return (_jsx(StepList, { children: steps.map(({ title, checked, current, expanded, subSteps }, idx) => (_jsxs(Step, { ...{ checked, current, expanded }, children: [_jsx(StepSection, { children: _jsxs(StepHeader, { children: [_jsx(StepMarker, { children: idx + 1 }), _jsx(StepHeading, { children: title }), subSteps && _jsx(StepExpandedIcon, {})] }) }), subSteps && (_jsx(SubStepList, { children: subSteps.map((subStep) => (_jsxs(SubStep, { children: [_jsx(SubStepMarker, {}), _jsx(SubStepHeading, { children: subStep })] }, idx))) }))] }, idx))) }));
};
