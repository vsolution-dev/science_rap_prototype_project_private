import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useSelector } from "../../../src/store/Store";
import { AppState } from "../../../src/store/Store";
import { IconArrowBack, IconBackslash } from "@tabler/icons-react";
import CustomFormLabel from "../forms/theme-elements/CustomFormLabel";
import { IconBackspace } from "@tabler/icons";

type Props = {
  title: string;
  footer?: string | JSX.Element;
  children: JSX.Element;
  event?: any;
  disable?: boolean;
};

const ParentCard = ({ title, children, footer, event, disable }: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  const theme = useTheme();
  const borderColor = theme.palette.divider;

  return (
    <Card
      sx={{
        padding: 0,
        border: !customizer.isCardShadow ? `1px solid ${borderColor}` : "none",
      }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? "outlined" : undefined}
    >
      <div
        style={{
          marginTop: "10px",
          display: "inline",
        }}
      >
        {!!disable && disable === true ? (
          <></>
        ) : (
          <>
            <Tooltip title="Bell">
              <IconButton
                color="primary"
                aria-label="primary-bell"
                onClick={() => {
                  if (!!event) {
                    event();
                  }
                }}
              >
                <IconArrowBack
                  width={20}
                  style={{
                    marginLeft: "10px",
                  }}
                />
              </IconButton>
            </Tooltip>
          </>
        )}

        <CustomFormLabel
          htmlFor="texr"
          style={{
            display: "inline",
            color: "#000",
            fontSize: 20,
            marginLeft: !!disable && disable === true ? "20px" : "0px",
            fontFamily: "Pretendard",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          {title}
        </CustomFormLabel>
      </div>
      <Divider />

      <CardContent>{children}</CardContent>
      {footer ? (
        <>
          <Divider />
          <Box p={3}>{footer}</Box>
        </>
      ) : (
        ""
      )}
    </Card>
  );
};

export default ParentCard;
