import React from 'react';
import { createUseStyles } from "react-jss";


export interface ButtonJSSProps {
	spacing: string;
	labelColor: string;
	fontWeight: string;
	fontStyle: string;
	children: React.ReactNode;
}

interface Props{
	spacing: string;
	labelColor: string;
	fontWeight: string;
	fontStyle: string;
}

const useStyles = createUseStyles({
  myButton: {
    padding: (props: Props) => props.spacing
  },
  myLabel: (props: Props) => ({
    display: 'block',
    color: props.labelColor,
    fontWeight: props.fontWeight,
    fontStyle: props.fontStyle
  })
})

const ButtonJSS: React.FC<ButtonJSSProps> = ({children, spacing, labelColor, fontWeight, fontStyle}) => {

	const classes = useStyles(spacing, labelColor, fontWeight, fontStyle)
	
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

export default ButtonJSS;
