import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Snackbar,
} from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import Breadcrumb from "../../../src/layouts/full/shared/breadcrumb/Breadcrumb";

import CustomFormLabel from "../../../src/components/forms/theme-elements/CustomFormLabel";
import ParentCard from "../../../src/components/shared/ParentCard";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";

const steps = ["Level", "Quarter", "Experiment"];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FormWizard = () => {
  const router = useRouter();

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
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 3.81,
            height: 18.4,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 11.07,
            position: "absolute",
            background:
              "linear-gradient(90deg, #81BC52 0%, #C0F65F 96%), linear-gradient(167deg, #81BC52 0%, rgba(129, 188, 82, 0) 100%), linear-gradient(267deg, #81BC52 0%, rgba(129, 188, 82, 0) 100%), radial-gradient(162.47% 51.66% at -7.21% 31.10%, #81BC52 0%, rgba(129, 188, 82, 0) 100%), radial-gradient(1120.34% 126.28% at 366.97% 284.92%, #81BC52 0%, rgba(129, 188, 82, 0) 100%), radial-gradient(529.28% 233.99% at 221.75% -143.36%, #5EB816 0%, rgba(94, 184, 22, 0) 82%)",
          }}
        />
        <div
          style={{
            width: 19.61,
            height: 9.11,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 9.27,
            position: "absolute",
            background:
              "linear-gradient(72deg, #81BC52 0%, #ABEE48 100%), linear-gradient(0deg, #81BC52 0%, rgba(129, 188, 82, 0) 100%), linear-gradient(314deg, #81BC52 0%, rgba(129, 188, 82, 0) 100%), linear-gradient(284deg, #81BC52 0%, rgba(129, 188, 82, 0) 100%), radial-gradient(58.76% 97.89% at 137.29% -1208.55%, rgba(194, 253, 101, 0.64) 0%, rgba(194, 253, 101, 0) 100%), radial-gradient(122.69% 418.58% at -909.86% 409.09%, #E1FFB1 0%, rgba(203, 255, 120, 0) 100%), linear-gradient(180deg, #96D240 0%, rgba(173, 239, 79, 0) 100%)",
          }}
        ></div>
        <div
          style={{
            width: 19.61,
            height: 9.11,
            left: "50%", // 수평 가운데 정렬
            top: 2.62,
            position: "absolute",
            transform: "rotate(180deg)",
            transformOrigin: "0 0",
            background:
              "linear-gradient(33deg, #BEF85C 0%, #90CD2F 100%), radial-gradient(88.01% 51.12% at 279.13% 59.59%, #B6EB53 0%, rgba(182, 235, 83, 0) 100%), radial-gradient(95.75% 68.65% at 737.01% 168.91%, #B8F053 0%, rgba(184, 240, 83, 0) 100%), radial-gradient(37.29% 42.89% at 65.21% 34.16%, rgba(209, 255, 119, 0) 0%, rgba(209, 255, 119, 0) 84%, rgba(209, 255, 119, 0.06) 90%, rgba(209, 255, 119, 0.15) 93%, rgba(209, 255, 119, 0.36) 96%, rgba(209, 255, 119, 0) 100%), radial-gradient(87.56% 51.22% at 70.79% 33.44%, rgba(129, 188, 82, 0) 0%, rgba(129, 188, 82, 0) 89%, rgba(129, 188, 82, 0.20) 96%, rgba(129, 188, 82, 0.60) 100%), radial-gradient(33.10% 40.91% at 31.37% 20.53%, rgba(129, 188, 82, 0) 0%, rgba(129, 188, 82, 0) 95%, rgba(129, 188, 82, 0.31) 99%, rgba(129, 188, 82, 0.40) 100%), radial-gradient(40.70% 37.45% at 36.66% 17.05%, rgba(129, 188, 82, 0) 0%, rgba(129, 188, 82, 0) 88%, rgba(129, 188, 82, 0.20) 92%, rgba(129, 188, 82, 0.46) 98%, rgba(129, 188, 82, 0.60) 100%), radial-gradient(47.80% 56.70% at 95.95% 103.91%, rgba(129, 188, 82, 0) 0%, rgba(129, 188, 82, 0.02) 91%, rgba(129, 188, 82, 0.20) 96%, rgba(129, 188, 82, 0.47) 100%), linear-gradient(180deg, rgba(129, 169, 87, 0) 64%, rgba(129, 188, 82, 0.03) 69%, rgba(129, 188, 82, 0.15) 78%, rgba(129, 188, 82, 0.41) 89%, rgba(129, 188, 82, 0.70) 97%)",
          }}
        ></div>
        <div
          style={{
            width: 24.9,
            height: 11.88,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 27.48,
            position: "absolute",
            background:
              "radial-gradient(66.67% 68.89% at 249.75% 138.80%, #BF8B88 0%, #835146 100%), linear-gradient(0deg, #8C3C60 13%, rgba(150, 73, 114, 0) 84%), radial-gradient(72.24% 184.49% at 292.31% -289.37%, #A3646D 0%, rgba(163, 100, 109, 0) 100%), radial-gradient(116.60% 64.95% at -1101.45% -18.62%, #BF8B88 0%, rgba(191, 139, 136, 0) 100%), radial-gradient(85.34% 95.32% at 232.45% 988.90%, #4F2B27 0%, rgba(147, 96, 87, 0) 100%), radial-gradient(33.48% 65.09% at 9.16% 32.84%, rgba(142, 125, 124, 0) 0%, rgba(142, 125, 124, 0) 52%, rgba(142, 125, 124, 0) 59%, #8E7D7C 66%, rgba(142, 125, 124, 0) 100%)",
          }}
        ></div>
      </div>
      <br></br>
      새싹
      <br></br>
      (7세 ~ 9세)
    </>,
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 7.15,
            height: 13.07,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)", // 가운데 정렬을 위한 트랜스폼
            top: 34.02,
            position: "absolute",
            background:
              "linear-gradient(0deg, #5B363A 0%, #5B363A 100%), linear-gradient(90deg, #908181 0%, rgba(144, 129, 129, 0) 100%), linear-gradient(90deg, #5B363A 0%, rgba(91, 54, 58, 0) 100%), linear-gradient(360deg, #6A2F5B 0%, rgba(106, 47, 91, 0) 100%), linear-gradient(270deg, #6D5C5C 0%, rgba(109, 92, 92, 0) 100%), radial-gradient(193.90% 286.99% at 37.24% 292.48%, #4D2D31 41%, rgba(77, 45, 49, 0) 100%), linear-gradient(270deg, rgba(127, 91, 96, 0) 0%, rgba(127, 91, 96, 0.75) 38%, rgba(127, 91, 96, 0.78) 46%, rgba(127, 91, 96, 0.74) 51%, rgba(127, 91, 96, 0) 100%), linear-gradient(270deg, rgba(104, 59, 75, 0) 0%, rgba(104, 59, 75, 0.58) 41%, rgba(104, 59, 75, 0.56) 74%, rgba(104, 59, 75, 0) 100%), radial-gradient(198.25% 36.66% at -10.43% 9.82%, #4D2D31 0%, rgba(77, 45, 49, 0.25) 61%, rgba(77, 45, 49, 0) 100%)",
            borderRadius: 0.25,
          }}
        />
        <div
          style={{
            width: 35.65,
            height: 35.33,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 3.23,
            position: "absolute",
            background:
              "radial-gradient(68.88% 67.66% at 239.70% 20.01%, #7CBE4D 0%, #549756 100%), radial-gradient(121.54% 108.51% at -476.57% -1878.73%, #438154 0%, rgba(67, 129, 84, 0) 100%), radial-gradient(126.76% 168.85% at -217.27% -329.68%, #438154 0%, rgba(67, 129, 84, 0) 100%), radial-gradient(167.67% 217.73% at -5.51% -86.70%, #438154 0%, rgba(67, 129, 84, 0) 100%), radial-gradient(503.37% 1209.19% at -152.89% 336.56%, #438154 0%, rgba(67, 129, 84, 0) 100%), radial-gradient(177.34% 169.10% at -453.10% 133.13%, #81CB44 0%, rgba(129, 203, 68, 0) 100%), radial-gradient(126.39% 120.54% at -961.22% 80.34%, #81CB44 0%, rgba(129, 203, 68, 0) 100%), radial-gradient(148.22% 139.85% at -477.60% 18.13%, #81CB44 0%, rgba(129, 203, 68, 0) 100%), radial-gradient(238.45% 78.56% at -82.12% 420.28%, #9EB9A3 0%, rgba(158, 185, 163, 0.71) 37%, rgba(158, 185, 163, 0) 100%), radial-gradient(217.81% 71.96% at -19.11% 187.33%, #9EB9A3 6%, rgba(158, 185, 163, 0.81) 37%, rgba(158, 185, 163, 0) 100%), radial-gradient(232.38% 103.83% at 3.93% -897.70%, #9EB9A3 0%, rgba(158, 185, 163, 0.78) 43%, rgba(158, 185, 163, 0) 100%), radial-gradient(1973.90% 319.56% at 312.96% 104.79%, rgba(158, 185, 163, 0.21) 0%, rgba(158, 185, 163, 0.19) 24%, rgba(158, 185, 163, 0.03) 65%, rgba(158, 185, 163, 0) 100%), radial-gradient(1710.85% 513.72% at 176.94% 166.83%, rgba(158, 185, 163, 0.21) 0%, rgba(158, 185, 163, 0.19) 31%, rgba(158, 185, 163, 0.03) 66%, rgba(158, 185, 163, 0) 100%), radial-gradient(259.84% 256.60% at 171.25% -301.68%, #549756 0%, rgba(84, 151, 86, 0.78) 67%, rgba(84, 151, 86, 0) 100%), radial-gradient(497.21% 409.94% at 217.84% -113.78%, rgba(67, 129, 84, 0.79) 0%, rgba(67, 129, 84, 0.54) 43%, rgba(67, 129, 84, 0.19) 73%, rgba(67, 129, 84, 0) 100%), radial-gradient(596.92% 529.54% at 263.86% -56.98%, rgba(67, 129, 84, 0.79) 0%, rgba(67, 129, 84, 0.54) 43%, rgba(67, 129, 84, 0.19) 73%, rgba(67, 129, 84, 0) 100%), radial-gradient(435.98% 381.49% at -37.67% -481.68%, rgba(67, 129, 84, 0.47) 0%, rgba(67, 129, 84, 0.32) 44%, rgba(67, 129, 84, 0.11) 87%, rgba(67, 129, 84, 0) 100%), radial-gradient(638.50% 477.11% at 124.44% 183.49%, rgba(67, 129, 84, 0.47) 0%, rgba(67, 129, 84, 0.32) 44%, rgba(67, 129, 84, 0.11) 87%, rgba(67, 129, 84, 0) 100%), radial-gradient(256.27% 237.84% at -63.25% -302.50%, #549756 0%, rgba(84, 151, 86, 0.78) 67%, rgba(84, 151, 86, 0) 100%), radial-gradient(292.38% 290.47% at -38.92% -418.82%, rgba(67, 129, 84, 0.74) 0%, rgba(67, 129, 84, 0.60) 35%, rgba(67, 129, 84, 0.41) 59%, rgba(67, 129, 84, 0) 100%), radial-gradient(307.30% 307.96% at 146.23% -134.17%, rgba(67, 129, 84, 0.59) 0%, rgba(67, 129, 84, 0.48) 35%, rgba(67, 129, 84, 0.33) 53%, rgba(67, 129, 84, 0.13) 80%, rgba(67, 129, 84, 0) 100%), radial-gradient(88.91% 166.99% at 371.65% -587.58%, #5A6F6C 0%, rgba(90, 111, 108, 0) 100%), linear-gradient(4deg, #7A7397 0%, rgba(122, 115, 151, 0) 100%), radial-gradient(480.64% 533.62% at 14.14% -434.52%, rgba(158, 185, 163, 0.46) 0%, rgba(158, 185, 163, 0.25) 41%, rgba(158, 185, 163, 0.05) 68%, rgba(158, 185, 163, 0) 100%), radial-gradient(304.63% 301.91% at -111.86% 434.09%, rgba(160, 226, 113, 0.80) 0%, rgba(160, 226, 113, 0.66) 22%, rgba(160, 226, 113, 0.30) 53%, rgba(160, 226, 113, 0.12) 76%, rgba(160, 226, 113, 0) 100%), radial-gradient(334.65% 331.66% at -203.97% 330.39%, rgba(160, 226, 113, 0.80) 0%, rgba(160, 226, 113, 0.71) 22%, rgba(160, 226, 113, 0.30) 57%, rgba(160, 226, 113, 0.12) 78%, rgba(160, 226, 113, 0) 100%), radial-gradient(418.51% 413.70% at -274.45% 199.95%, rgba(160, 226, 113, 0.45) 0%, rgba(160, 226, 113, 0.41) 22%, rgba(160, 226, 113, 0.22) 56%, rgba(160, 226, 113, 0.10) 75%, rgba(160, 226, 113, 0) 100%), radial-gradient(1680.84% 225.20% at 1127.25% 213.30%, rgba(157, 219, 113, 0.68) 0%, rgba(157, 219, 113, 0.23) 56%, rgba(157, 219, 113, 0.09) 77%, rgba(157, 219, 113, 0) 100%), radial-gradient(2111.89% 639.12% at 1480.48% 524.29%, rgba(157, 219, 113, 0.87) 0%, rgba(157, 219, 113, 0.29) 67%, rgba(157, 219, 113, 0) 100%), radial-gradient(1734.47% 284.52% at 1065.98% 221.50%, rgba(157, 219, 113, 0.40) 0%, rgba(157, 219, 113, 0.15) 44%, rgba(157, 219, 113, 0.04) 69%, rgba(157, 219, 113, 0) 100%), radial-gradient(1280.51% 153.60% at 780.98% 108.28%, rgba(157, 219, 113, 0.34) 0%, rgba(157, 219, 113, 0.15) 40%, rgba(157, 219, 113, 0.04) 65%, rgba(157, 219, 113, 0) 100%), radial-gradient(1814.19% 547.67% at 791.73% 302.03%, rgba(157, 219, 113, 0.43) 0%, rgba(157, 219, 113, 0.23) 40%, rgba(157, 219, 113, 0.04) 73%, rgba(157, 219, 113, 0) 100%), radial-gradient(2327.20% 558.34% at 825.54% 311.27%, rgba(157, 219, 113, 0.26) 0%, rgba(157, 219, 113, 0.14) 37%, rgba(157, 219, 113, 0.03) 65%, rgba(157, 219, 113, 0) 100%), radial-gradient(2572.26% 524.02% at 758.09% 285.25%, rgba(157, 219, 113, 0.26) 0%, rgba(157, 219, 113, 0.14) 37%, rgba(157, 219, 113, 0.03) 70%, rgba(157, 219, 113, 0) 100%), radial-gradient(1949.36% 939.46% at 928.19% 526.50%, rgba(157, 219, 113, 0.43) 0%, rgba(157, 219, 113, 0.23) 40%, rgba(157, 219, 113, 0.04) 70%, rgba(157, 219, 113, 0) 100%), radial-gradient(924.17% 727.20% at -943.27% 499.44%, #81CB44 34%, rgba(129, 203, 68, 0.85) 48%, rgba(129, 203, 68, 0.38) 78%, rgba(129, 203, 68, 0) 100%), radial-gradient(188.38% 186.72% at 53.70% -410.83%, rgba(129, 203, 68, 0.22) 0%, rgba(129, 203, 68, 0.13) 45%, rgba(129, 203, 68, 0.06) 76%, rgba(129, 203, 68, 0) 100%), radial-gradient(174.68% 280.44% at -324.19% 124.50%, rgba(129, 203, 68, 0.38) 0%, rgba(129, 203, 68, 0.21) 25%, rgba(129, 203, 68, 0.14) 55%, rgba(129, 203, 68, 0.06) 84%, rgba(129, 203, 68, 0) 100%), radial-gradient(360.96% 282.94% at -330.75% -9.36%, rgba(129, 203, 68, 0.29) 0%, rgba(129, 203, 68, 0.19) 56%, rgba(129, 203, 68, 0.09) 77%, rgba(129, 203, 68, 0) 100%), radial-gradient(146.55% 368.04% at 22.42% -338.31%, rgba(91, 143, 103, 0.75) 0%, rgba(91, 143, 103, 0) 83%)",
          }}
        ></div>
      </div>
      <br></br>
      나무
      <br></br>
      (10세 ~ 12세)
    </>,
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 8.75,
            height: 4.25,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 27.58,
            position: "absolute",
            background:
              "linear-gradient(0deg, #795556 0%, #795556 100%), radial-gradient(76.16% 195.73% at 67.26% 155.20%, #5F2F2E 34%, rgba(95, 47, 46, 0) 100%), radial-gradient(39.88% 131.15% at 40.15% 3.82%, #5F2F2E 48%, rgba(95, 47, 46, 0) 97%), linear-gradient(346deg, #7B4064 0%, rgba(123, 64, 100, 0) 100%), linear-gradient(93deg, #826C6A 0%, rgba(130, 108, 106, 0) 100%), linear-gradient(259deg, #826C6A 0%, rgba(130, 108, 106, 0) 100%), linear-gradient(180deg, rgba(143, 87, 144, 0) 0%, #8F5790 100%)",
          }}
        ></div>
        <div
          style={{
            width: 19.58,
            height: 9.18,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 19.4,
            position: "absolute",
            background:
              "radial-gradient(54.39% 47.09% at 122.01% 21.12%, #80C156 0%, #52915C 100%), radial-gradient(86.21% 39.44% at 324.60% 19.72%, #57A22C 0%, rgba(87, 162, 44, 0) 100%), radial-gradient(89.15% 271.83% at 278.14% -509.13%, #7F779B 0%, rgba(127, 119, 155, 0) 100%), linear-gradient(0deg, #7F779B 0%, rgba(127, 119, 155, 0) 100%), radial-gradient(93.47% 202.83% at 1416.41% -22.50%, #105B0D 0%, rgba(16, 91, 13, 0) 100%), radial-gradient(87.84% 69.17% at 722.19% 12.73%, rgba(124, 153, 131, 0) 0%, rgba(124, 153, 131, 0.12) 95%, rgba(124, 153, 131, 0.28) 96%, rgba(124, 153, 131, 0.42) 97%, #7C9983 100%), radial-gradient(132.18% 140.40% at -608.43% 131.26%, rgba(162, 224, 112, 0.48) 11%, rgba(162, 224, 112, 0.39) 30%, rgba(162, 224, 112, 0.19) 57%, rgba(162, 224, 112, 0.05) 79%, rgba(162, 224, 112, 0.03) 89%, rgba(162, 224, 112, 0) 100%), radial-gradient(172.08% 367.55% at -373.78% -494.41%, rgba(162, 224, 112, 0.48) 0%, rgba(162, 224, 112, 0.39) 30%, rgba(162, 224, 112, 0.19) 60%, rgba(162, 224, 112, 0.05) 83%, rgba(162, 224, 112, 0) 100%), radial-gradient(75.51% 64.93% at 72.60% 171.79%, rgba(82, 145, 92, 0) 0%, rgba(82, 145, 92, 0) 92%, rgba(82, 145, 92, 0.11) 95%, rgba(82, 145, 92, 0.27) 97%, rgba(82, 145, 92, 0.60) 100%)",
          }}
        ></div>
        <div
          style={{
            width: 13.24,
            height: 6.86,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 13.6,
            position: "absolute",
            background:
              "radial-gradient(54.39% 49.28% at 122.01% 20.93%, #80C156 0%, #52915C 100%), linear-gradient(90deg, #529257 0%, rgba(82, 146, 87, 0) 100%), radial-gradient(90.22% 39.44% at 441.74% 19.72%, #57A22C 0%, rgba(87, 162, 44, 0) 100%), radial-gradient(179.13% 67.22% at -543.12% 171.44%, #479820 0%, rgba(71, 152, 32, 0) 100%), radial-gradient(382.41% 81.37% at -596.81% 396.19%, #15600B 0%, rgba(21, 96, 11, 0) 100%), radial-gradient(47.05% 52.59% at 92.03% 28.06%, rgba(117, 148, 125, 0) 87%, #75947D 100%), radial-gradient(299.28% 81.80% at -42.44% 69.37%, #15600B 0%, rgba(21, 96, 11, 0) 100%), radial-gradient(180.07% 367.55% at -370.08% -494.41%, rgba(162, 224, 112, 0.43) 0%, rgba(162, 224, 112, 0.35) 28%, rgba(162, 224, 112, 0.17) 58%, rgba(162, 224, 112, 0.05) 83%, rgba(162, 224, 112, 0) 100%), radial-gradient(132.18% 146.92% at -608.43% 138.68%, rgba(162, 224, 112, 0.48) 11%, rgba(162, 224, 112, 0.39) 30%, rgba(162, 224, 112, 0.19) 57%, rgba(162, 224, 112, 0.05) 79%, rgba(162, 224, 112, 0.03) 89%, rgba(162, 224, 112, 0) 100%), radial-gradient(75.51% 67.94% at 72.60% 203.06%, rgba(82, 145, 92, 0) 0%, rgba(82, 145, 92, 0) 92%, rgba(82, 145, 92, 0.11) 95%, rgba(82, 145, 92, 0.27) 97%, rgba(82, 145, 92, 0.60) 100%)",
          }}
        ></div>
        <div
          style={{
            width: 8.89,
            height: 7.88,
            left: "50%", // 수평 가운데 정렬
            transform: "translateX(-50%)",
            top: 6.79,
            position: "absolute",
            background:
              "linear-gradient(90deg, #5A9D57 0%, #89CF42 100%), radial-gradient(204.53% 50.40% at -514.90% 76.40%, #3B9017 0%, rgba(59, 144, 23, 0) 100%), radial-gradient(101.97% 78.83% at -3778.99% 454.80%, #608371 0%, rgba(96, 131, 113, 0) 100%), linear-gradient(107deg, #608371 0%, rgba(96, 131, 113, 0) 100%), radial-gradient(300.10% 155.51% at -396.26% -453.05%, #637374 0%, rgba(99, 115, 116, 0) 100%), radial-gradient(92.52% 373.45% at 759.53% -609.06%, #15600B 0%, rgba(21, 96, 11, 0) 100%), linear-gradient(180deg, #639E52 0%, rgba(112, 169, 96, 0) 100%), radial-gradient(266.13% 80.71% at -274.34% -54.82%, rgba(154, 216, 105, 0.63) 0%, rgba(154, 216, 105, 0.46) 30%, rgba(154, 216, 105, 0.19) 60%, rgba(154, 216, 105, 0.05) 79%, rgba(154, 216, 105, 0.03) 89%, rgba(154, 216, 105, 0) 100%), radial-gradient(306.98% 114.87% at -451.29% -994.91%, rgba(154, 216, 105, 0.48) 11%, rgba(154, 216, 105, 0.39) 30%, rgba(154, 216, 105, 0.19) 57%, rgba(154, 216, 105, 0.05) 78%, rgba(154, 216, 105, 0.03) 91%, rgba(154, 216, 105, 0) 100%), radial-gradient(65.14% 80.46% at 38.82% 334.62%, rgba(82, 145, 92, 0) 0%, rgba(82, 145, 92, 0) 89%, rgba(82, 145, 92, 0.07) 95%, rgba(82, 145, 92, 0.26) 100%), radial-gradient(43.26% 62.44% at 42.98% 11.25%, rgba(82, 145, 92, 0) 0%, rgba(82, 145, 92, 0) 93%, rgba(82, 145, 92, 0.07) 95%, rgba(82, 145, 92, 0.40) 99%), linear-gradient(56deg, rgba(82, 145, 92, 0) 0%, rgba(82, 145, 92, 0) 90%, rgba(82, 145, 92, 0.07) 94%, rgba(82, 145, 92, 0.26) 100%)",
          }}
        ></div>
      </div>
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
      width: "45%",
      height: "100%",
      background: "#FBDDED",
      borderRadius: 20,
      marginBottom: "30px",
      marginLeft: "15px",
      marginRight: "15px",
    },
    {
      width: "45%",
      height: "100%",
      background: "#DBF0F9",
      borderRadius: 20,
      marginBottom: "30px",
    },
    {
      width: "45%",
      height: "100%",
      background: "#FCE6D2",
      borderRadius: 20,
      marginBottom: "30px",
      marginLeft: "15px",
      marginRight: "15px",
    },
    {
      width: "45%",
      height: "100%",
      background: "#D9DAF1",
      borderRadius: 20,
      marginBottom: "30px",
    },
  ];

  const experimentitemStyles = [
    {
      width: "100%",
      height: "100%",
      background: "#FBDDF4",
      borderRadius: 20,
      marginBottom: "20px",
    },
    {
      width: "100%",
      height: "100%",
      background: "#DBF5F9",
      borderRadius: 20,
      marginBottom: "20px",
    },

    {
      width: "100%",
      height: "100%",
      background: "#FCE6D2",
      borderRadius: 20,
      marginBottom: "20px",
    },
    {
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
  const quarters = [<>봄</>, <>여름</>, <>가을</>, <>겨울</>];
  // Experiment select item info
  const getExperiment = (level: number, quarter: number) => {
    const findResult = experiments.find(
      (item) => item.level == level && item.quarter == quarter
    );
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
            <div
              style={{
                color: "rgba(0, 0, 0, 0.20)",
                fontSize: 24,
                fontFamily: "Pretendard",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              스스로 커지는 풍선
            </div>
          ),
          target: "/forms/form-wizard/science-rap/self-inflating-balloon",
        },
        {
          title: (
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
          ),
          target: undefined,
        },
        {
          title: (
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
          ),
          target: undefined,
        },
        {
          title: (
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
              tyle={{
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
            <CustomFormLabel htmlFor="Quarter">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                  border: "1px #FDF2D5 solid",
                  display: "flex", // Flex 컨테이너로 설정하여 내용을 가운데 정렬합니다.
                  justifyContent: "center", // 수평 가운데 정렬
                  alignItems: "center", // 수직 가운데 정렬
                }}
              />
              <span>새싹 계절 과정</span>
            </CustomFormLabel>
            <br></br>
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
          </Box>
        );
      case 2:
        return (
          <Box pt={3}>
            <CustomFormLabel htmlFor="Experiment">가을 실험</CustomFormLabel>
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
                  {index + 1}. {item.title}
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
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          준비 중입니다. 다른 기능을 이용하여 주십시오.
        </Alert>
      </Snackbar>

      <ParentCard title="ScienceRAP">
        <Box width="100%">
          <Stepper activeStep={activeStep}>
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
          {activeStep === steps.length ? (
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
              <Box>{handleSteps(activeStep)}</Box>

              <Box display="flex" flexDirection="row" mt={3}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
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
