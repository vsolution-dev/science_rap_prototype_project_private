import React from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import PageContainer from "../../../../../src/components/container/PageContainer";
import Breadcrumb from "../../../../../src/layouts/full/shared/breadcrumb/Breadcrumb";

import CustomFormLabel from "../../../../../src/components/forms/theme-elements/CustomFormLabel";
import ParentCard from "../../../../../src/components/shared/ParentCard";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Stack } from "@mui/system";
import { Height } from "@mui/icons-material";
import { useRouter } from "next/router";
import { ro } from "date-fns/locale";

const steps = ["1", "2", "3", "4"];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const selfinflatingballoon = () => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const [isWindow, setIsWindow] = useState<boolean>(false);

  useEffect(() => {
    setIsWindow(true);
  }, []);

  const videos = [
    "/videos/v1.mp4",
    "/videos/v2.mp4",
    "/videos/v3.mp4",
    "/videos/v4.mp4",
  ];

  // quiz select item info
  const [selectquiz, setSelectquiz] = React.useState(0);
  const handleSelectquiz = (event: any) => {
    const { value } = event.currentTarget;

    handleSnackbarClose();

    if (!(value == 1)) {
      setSnackbarOpen(true);
      return;
    }

    setSelectquiz(value);
    handleNext();
  };
  const quizs = [<>산소</>, <>이산화탄소</>];

  const quizitemStyles = [
    {
      marginTop: "1rem",
      width: "100%",
      height: "100%",
      background: "#419A68",
      borderRadius: 10,
      marginBottom: "20px",
    },
    {
      width: "100%",
      height: "100%",
      background: "#419A68",
      borderRadius: 10,
      marginBottom: "20px",
    },
  ];

  const [isShowNextButton, setIsShowNextButton] = useState<boolean>(true);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step: any) => step === -1;

  const isStepSkipped = (step: any) => skipped.has(step);

  const router = useRouter();

  useEffect(() => {
    if (activeStep - 2 === steps.length) {
      router.push("/");
      return;
    }

    if (activeStep === 4) {
      setIsShowNextButton(false);
    } else {
      setIsShowNextButton(true);
    }
  }, [activeStep]);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      router.push("/");
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);

      return newSkipped;
    });
  };

  // eslint-disable-next-line consistent-return
  const handleSteps = (step: any) => {
    switch (step) {
      case 0:
      case 1:
      case 2:
      case 3:
        return (
          <Box>
            <CustomFormLabel htmlFor="Videos"></CustomFormLabel>
            <br></br>
            <div>
              <ReactPlayer
                className="react-player"
                url={videos[step]}
                width="100%"
                height="70vh"
                style={{
                  objectFit: "fill",
                }}
                muted={false}
                playing={true}
                loop={true}
                controls={true}
                playsinline
              />
            </div>
          </Box>
        );
      case 4:
        return (
          <Box>
            <CustomFormLabel htmlFor="quiz">
              <div
                style={{
                  color: "black",
                  fontSize: 24,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                간단한 퀴즈를 풀어보아요!🧐📚
              </div>
            </CustomFormLabel>
            <div
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
                borderRadius: 23,
                border: "1px #E1E4E8 solid",
                lineHeight: "30",
              }}
            />
            {/* src={"/icons/ic_fallen_leaf.svg"}
                alt="alt"
                style={{ width: "auto", height: "auto", marginTop: "20px" }} */}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/icons/quiz.png"
                alt="alt"
                style={{ width: "20rem", height: "auto", marginTop: "20px" }}
              ></img>
            </div>

            {/* <div>
              식초와 탄산수소 나트륨이 만나면 (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)라는 기체가 발생해요.
            </div>
            <br></br>
            <div> &lt;보기 &gt;</div>
            <br></br> */}
            {quizs.map((item, index) => {
              return (
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  style={quizitemStyles[index]}
                  key={index}
                  value={index}
                  onClick={handleSelectquiz}
                >
                  {item}
                </Button>
              );
            })}
          </Box>
        );
      case 5:
        return (
          <Box>
            <CustomFormLabel
              htmlFor="Level"
              style={{
                color: "#1E262F",
                fontSize: 16,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
                marginBottom: "20px",
              }}
            >
              더 알아보기
            </CustomFormLabel>

            <div
              style={{
                textAlign: "center",
                color: "black",
                fontSize: 24,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              딩동댕!🧡⭐️ 정답은{" "}
            </div>
            <br></br>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                color: "#419A68",
                fontSize: 28,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              이산화탄소
            </div>
            <br></br>
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/XVAoQ60yAZc?si=NSxtkV-Z-Dcx31KR"
              width="100%"
              height="70vh"
              style={{
                objectFit: "fill",
              }}
              playing={false}
              controls={true}
              loop={true}
              playsinline
            />
            <br></br>
            <div
              style={{
                color: "black",
                fontSize: 24,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              이산화탄소의 성질
            </div>
            <br></br>
            <div
              style={{
                color: "#505050",
                fontSize: 20,
                fontFamily: "Pretendard",
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              이산화탄소는 색깔이 없어서
              <br />
              우리 눈에 보이지도 않고 <br />
              냄새도 나지 않아요~
            </div>
          </Box>
        );
      default:
        return <></>;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PageContainer>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          오답 입니다. 다시 선택해주세요.
        </Alert>
      </Snackbar>
      <ParentCard title="스스로 커지는 풍선" event={handleBack} disable={false}>
        <Box width="100%">
          {activeStep < 4 && (
            <Stepper
              style={{
                flexWrap: "wrap",
                justifyItems: "center",
                alignContent: "space-between",
                justifyContent: "space-around",
              }}
              activeStep={activeStep}
            >
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }

                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          )}
          {activeStep - 3 === steps.length ? (
            <>
              <Stack spacing={2} mt={3}>
                <Alert severity="success">
                  All steps completed - you&apos;re finished
                </Alert>

                <Box textAlign="right">
                  <Button
                    onClick={handleReset}
                    variant="contained"
                    color="error"
                  >
                    Reset
                  </Button>
                </Box>
              </Stack>
            </>
          ) : (
            <>
              <Box>{isWindow && handleSteps(activeStep)}</Box>

              <Box display="flex" flexDirection="row" mt={3}>
                {!(activeStep - 1 === steps.length) && (
                  <Button
                    color="inherit"
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    이전
                  </Button>
                )}
                <Box flex="1 1 auto" />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}
                {isShowNextButton && !(activeStep - 1 === steps.length) && (
                  <Button
                    onClick={handleNext}
                    variant="contained"
                    color={"secondary"}
                  >
                    다음
                  </Button>
                )}

                {activeStep - 1 === steps.length && (
                  <Button
                    onClick={handleNext}
                    style={{ background: "#232B35" }}
                    variant="contained"
                    color={"secondary"}
                    fullWidth
                  >
                    <div
                      style={{
                        color: "white",
                        fontSize: 24,
                        fontFamily: "Pretendard",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      다른 실험 도전!🔥
                    </div>
                  </Button>
                )}
              </Box>
            </>
          )}
        </Box>
      </ParentCard>
    </PageContainer>
  );
};

export default selfinflatingballoon;
