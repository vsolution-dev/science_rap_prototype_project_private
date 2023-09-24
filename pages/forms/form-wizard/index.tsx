import React from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography, Snackbar } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";

import CustomFormLabel from "../../../src/components/forms/theme-elements/CustomFormLabel";
import ParentCard from "../../../src/components/shared/ParentCard";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";

const steps = ["", "", ""];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FormWizard = () => {
  const router = useRouter();

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };
  // Level select item info
  const [selectLevel, setSelectLevel] = React.useState(0);
  const handleSelectLevel = (event: any) => {
    const { value } = event.currentTarget;

    handleSnackbarClose();

    if (!(value == 0)) {
      setSnackbarOpen(true);
      return;
    }

    setSelectLevel(value);
    handleNext();
  };
  const levels = [
    <>
      <img src={"/icons/ic_seedling.svg"} alt="alt" style={{ width: "auto", height: "auto" }} />
      <br></br>
      새싹
      <br></br>
      (7세 ~ 9세)
    </>,
    <>
      <img
        src={"/icons/ic_deciduous_tree.svg"}
        alt="alt"
        style={{ width: "auto", height: "auto" }}
      />
      <br></br>
      나무
      <br></br>
      (10세 ~ 12세)
    </>,
    <>
      <img src={"/icons/ic_tree_3.svg"} alt="alt" style={{ width: "auto", height: "auto" }} />
      <br></br>숲<br></br>
      (13세 ~ 15세)
    </>,
  ];

  const levelitemStyles = [
    {
      width: "100%",
      height: "100%",
      background: "#FDF2D5",
      borderRadius: 20,
      marginBottom: "20px",
    },
    {
      width: "100%",
      height: "100%",
      background: "#DCF9DB",
      borderRadius: 20,
      marginBottom: "20px",
    },

    {
      width: "100%",
      height: "100%",
      background: "#D9F0F1",
      borderRadius: 20,
      marginBottom: "20px",
    },
  ];

  const quarteritemStyles = [
    {
      // width: "45%",
      height: "100%",
      background: "#FBDDED",
      borderRadius: 20,
      margin: "0.2rem",
    },
    {
      // width: "45%",
      height: "100%",
      background: "#DBF0F9",
      borderRadius: 20,
      margin: "0.2rem",
    },
    {
      // width: "45%",
      height: "100%",
      background: "#FCE6D2",
      borderRadius: 20,
      margin: "0.2rem",
    },
    {
      // width: "45%",
      height: "100%",
      background: "#D9DAF1",
      borderRadius: 20,
      margin: "0.2rem",
    },
  ];

  const experimentitemStyles = [
    {
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
      height: "100%",
      background: "#FBDDF4",
      borderRadius: 20,
      marginBottom: "20px",
    },
    {
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
      height: "100%",
      background: "#DBF5F9",
      borderRadius: 20,
      marginBottom: "20px",
    },

    {
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
      height: "100%",
      background: "#FCE6D2",
      borderRadius: 20,
      marginBottom: "20px",
    },
    {
      display: "flex",
      justifyContent: "flex-start",
      width: "100%",
      height: "100%",
      background: "#D9DEF1",
      borderRadius: 20,
      marginBottom: "20px",
    },
  ];
  // Quarter select item info
  const [selectQuarter, setSelectQuarter] = React.useState(0);
  const handleSelectQuarter = (event: any) => {
    const { value } = event.currentTarget;

    handleSnackbarClose();

    if (!(value == 2)) {
      setSnackbarOpen(true);
      return;
    }

    setSelectQuarter(value);
    handleNext();
  };
  const quarters = [
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <img
        src={"/icons/ic_bug.svg"}
        alt="alt"
        style={{ width: "auto", height: "auto", marginTop: "20px" }}
      />
      <div
        style={{
          fontSize: 19,
          fontFamily: "Pretendard",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        봄
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <img
        src={"/icons/ic_spouting_whale.svg"}
        alt="alt"
        style={{ width: "auto", height: "auto", marginTop: "20px" }}
      />
      <div
        style={{
          fontSize: 19,
          fontFamily: "Pretendard",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        여름
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <img
        src={"/icons/ic_fallen_leaf.svg"}
        alt="alt"
        style={{ width: "auto", height: "auto", marginTop: "20px" }}
      />
      <div
        style={{
          fontSize: 19,
          fontFamily: "Pretendard",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        가을
      </div>
    </div>,
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <img
        src={"/icons/ic_penguin.svg"}
        alt="alt"
        style={{ width: "auto", height: "auto", marginTop: "20px" }}
      />
      <div
        style={{
          fontSize: 19,
          fontFamily: "Pretendard",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        겨울
      </div>
    </div>,
  ];
  // Experiment select item info
  const getExperiment = (level: number, quarter: number) => {
    const findResult = experiments.find((item) => item.level == level && item.quarter == quarter);
    return !!findResult ? findResult.items : [];
  };
  const handelSelectExperiments = (event: any, target: any) => {
    const { value } = event.currentTarget;

    handleSnackbarClose();

    if (!(value == 0)) {
      setSnackbarOpen(true);
      return;
    }

    router.push(target);
  };
  const experiments = [
    {
      level: 0,
      quarter: 2,
      items: [
        {
          title: (
            <>
              <img
                src="/icons/ic_face_in_clouds.svg"
                alt="alt"
                style={{
                  marginRight: "1rem",
                }}
              />
              <div
                style={{
                  color: "#5F2F2E",
                  fontSize: 24,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                스스로 커지는 풍선
              </div>
            </>
          ),
          target: "/forms/form-wizard/science-rap/self-inflating-balloon",
        },
        {
          title: (
            <>
              <img
                src="/icons/ic_white_heart.svg"
                alt="alt"
                style={{
                  marginRight: "1rem",
                }}
              />
              <div
                style={{
                  color: "#31537C",
                  fontSize: 24,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                달걀 탱탱볼
              </div>
            </>
          ),
          target: undefined,
        },
        {
          title: (
            <>
              <img
                src="/icons/ic_automobile.svg"
                alt="alt"
                style={{
                  marginRight: "1rem",
                }}
              />
              <div
                style={{
                  color: "#5F2F2E",
                  fontSize: 24,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                자석 자동차
              </div>
            </>
          ),
          target: undefined,
        },
        {
          title: (
            <>
              <img
                src="/icons/ic_partying_face.svg"
                alt="alt"
                style={{
                  marginRight: "1rem",
                }}
              />
              <div
                style={{
                  color: "#31537C",
                  fontSize: 24,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                빨대 피리
              </div>
            </>
          ),
          target: undefined,
        },
      ],
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step: any) => step === -1;

  const isStepSkipped = (step: any) => skipped.has(step);

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
        return (
          <Box>
            <CustomFormLabel
              htmlFor="Level"
              style={{
                color: "#1E262F",
                fontSize: 24,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              원하는 레벨을 <br></br> 골라보아요 😊
            </CustomFormLabel>
            <br></br>
            {levels.map((item, index) => {
              return (
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  style={levelitemStyles[index]}
                  key={index}
                  value={index}
                  onClick={handleSelectLevel}
                >
                  {item && (
                    <div
                      style={{
                        color: "#724414",
                        fontSize: 24,
                        fontFamily: "Pretendard",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      {item}
                    </div>
                  )}
                </Button>
              );
            })}
          </Box>
        );
      case 1:
        return (
          <Box>
            <CustomFormLabel
              htmlFor="Level"
              style={{
                color: "#1E262F",
                fontSize: 24,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              새싹 계절 과정
            </CustomFormLabel>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "100%",
                background: "#fff",
                border: "1.5px solid #FDF2D5",
                borderRadius: 20,
                textAlign: "center",
              }}
            >
              <img
                src={"/icons/ic_seedling.svg"}
                alt="alt"
                style={{ width: "auto", height: "auto", marginTop: "20px" }}
              />
              <br></br>
              <div
                style={{
                  color: "#724414",
                  fontSize: 19,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                새싹
              </div>
              <div
                style={{
                  color: "#724414",
                  fontSize: 12,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  marginBottom: "20px",
                }}
              >
                (7세 ~ 9세)
              </div>
            </div>
            <br></br>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                placeItems: "center",
                gap: "1rem",
              }}
            >
              {quarters.map((item, index) => {
                return (
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    style={quarteritemStyles[index]}
                    key={index}
                    value={index}
                    onClick={handleSelectQuarter}
                  >
                    {item && (
                      <div
                        style={{
                          color: "#724414",
                          fontSize: 24,
                          fontFamily: "Pretendard",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        {item}
                      </div>
                    )}
                  </Button>
                );
              })}
            </div>
          </Box>
        );

      case 2:
        return (
          <Box pt={3}>
            <CustomFormLabel
              htmlFor="Level"
              style={{
                color: "#1E262F",
                fontSize: 24,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              가을 실험
            </CustomFormLabel>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "100%",
                background: "#fff",
                border: "1.5px solid #FCE6D2",
                borderRadius: 20,
                textAlign: "center",
              }}
            >
              <img
                src={"/icons/ic_fallen_leaf.svg"}
                alt="alt"
                style={{ width: "auto", height: "auto", marginTop: "20px" }}
              />
              <br></br>
              <div
                style={{
                  color: "#724414",
                  fontSize: 19,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                가을 실험
              </div>
              <div
                style={{
                  color: "#724414",
                  fontSize: 12,
                  fontFamily: "Pretendard",
                  fontWeight: "700",
                  wordWrap: "break-word",
                  marginBottom: "20px",
                }}
              >
                (7세 ~ 9세)
              </div>
            </div>
            <br></br>
            {getExperiment(selectLevel, selectQuarter).map((item, index) => {
              return (
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  style={experimentitemStyles[index]}
                  key={index}
                  value={index}
                  onClick={(e: any) => {
                    handelSelectExperiments(e, item.target);
                  }}
                >
                  {item.title}
                </Button>
              );
            })}
            {/* <Typography variant="h5">Terms and condition</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Sard about this site or you have been to it, but you cannot figure
              out what it is or what it can do. MTA web directory isSard about
              this site or you have been to it, but you cannot figure out what
              it is or what it can do. MTA web directory is
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Agree with terms?"
            /> */}
          </Box>
        );
      default:
        break;
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
        <Alert onClose={handleSnackbarClose} severity="error" sx={{ width: "100%" }}>
          준비 중입니다. 다른 기능을 이용하여 주십시오.
        </Alert>
      </Snackbar>

      <ParentCard
        title=""
        event={handleBack}
        disable={activeStep === 0}
        logo={
          <img
            src={"/icons/logo.svg"}
            alt="alt"
            style={{
              margin: "0.5rem",
              width: "10rem",
            }}
          />
        }
      >
        <Box width="100%">
          {/* <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional</Typography>;
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
          </Stepper> */}
          {activeStep === steps.length ? (
            <>
              <Stack spacing={2} mt={3}>
                <Alert severity="success">All steps completed - you&apos;re finished</Alert>

                <Box textAlign="right">
                  <Button onClick={handleReset} variant="contained" color="error">
                    Reset
                  </Button>
                </Box>
              </Stack>
            </>
          ) : (
            <>
              <Box>{handleSteps(activeStep)}</Box>

              <Box display="flex" flexDirection="row" mt={3}>
                {/* <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button> */}
                <Box flex="1 1 auto" />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                {/* <Button
                  onClick={handleNext}
                  variant="contained"
                  color={
                    activeStep === steps.length - 1 ? "success" : "secondary"
                  }
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button> */}
              </Box>
            </>
          )}
        </Box>
      </ParentCard>
    </PageContainer>
  );
};

export default FormWizard;
