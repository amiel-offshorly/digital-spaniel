import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const StyledLink = styled(Link)`
  text-underline-offset: 6.5px;
  cursor: pointer;
  font: normal normal 600 20px/27px Open Sans;
  letter-spacing: 0px;
  color: #19293a;
  text-decoration: solid underline #c0345e;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #c0345e;
  }
`;
