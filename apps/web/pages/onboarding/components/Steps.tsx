import classNames from "@calcom/lib/classNames";

interface ISteps {
  maxSteps: number;
  currentStep: number;
  navigateToStep: (step: number) => void;
}

const Steps = (props: ISteps) => {
  const { maxSteps, currentStep, navigateToStep } = props;

  return (
    <div className="space-y-2 pt-4">
      <p className="text-xs font-medium text-gray-500 dark:text-white">
        Step {currentStep + 1} of {maxSteps}
      </p>
      <div className="flex w-full space-x-2 rtl:space-x-reverse">
        {new Array(maxSteps).fill(0).map((_s, index) => {
          return index <= currentStep ? (
            <div
              key={`step-${index}`}
              onClick={() => navigateToStep(index)}
              className={classNames(
                "h-1 w-1/4 bg-black dark:bg-white",
                index < currentStep ? "cursor-pointer" : ""
              )}
            />
          ) : (
            <div key={`step-${index}`} className="h-1 w-1/4 bg-black bg-opacity-25"></div>
          );
        })}
      </div>
    </div>
  );
};
export { Steps };
