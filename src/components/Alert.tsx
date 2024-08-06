import { X } from "lucide-react";
import "./style.scss";
import { ReactNode } from "react";
import { AlertType } from "../types";

interface IProps {
  type: AlertType;
  icon: ReactNode;
  title: string;
  description: string;
}
const Alert = ({ type, icon, title, description }: IProps) => {
  return (
    <>
      <div className={`container ${type}`}>
        <div className="alert-wrapper d-flex align-items-center justify-content-between p-3">
          <div className="alert-title d-flex align-items-center justify-content-between ">
            {icon}
            <h2>{title}</h2>
          </div>
          <X className="close" />
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Alert;
