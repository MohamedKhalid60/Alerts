import { BellRing, Check, Aperture } from "lucide-react";

import Alert from "./components/Alert";

export default function App() {
  return (
    <>
      <h1 className="text-center">App</h1>
      <Alert
        type={"alert alert-danger"}
        icon={<BellRing size={30} className="pe-2" />}
        title={"Danger Alert"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio nemo at sed rerum voluptatibus exercitationem doloribus animi architecto saepe."
        }
      />
      <Alert
        type={"alert alert-info"}
        icon={<BellRing size={30} className="pe-2" />}
        title={"Danger Alert"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio nemo at sed rerum voluptatibus exercitationem doloribus animi architecto saepe."
        }
      />
      <Alert
        type={"alert alert-success"}
        icon={<Check size={30} className="pe-2" />}
        title={"Success Alert"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio nemo at sed rerum voluptatibus exercitationem doloribus animi architecto saepe."
        }
      />
      <Alert
        type={"alert alert-primary "}
        icon={<Aperture size={30} className="pe-2" />}
        title={"pass Alert"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio nemo at sed rerum voluptatibus exercitationem doloribus animi architecto saepe."
        }
      />
      <Alert
        type={"alert alert-warning "}
        icon={<Aperture size={30} className="pe-2" />}
        title={"pass Alert"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur optio nemo at sed rerum voluptatibus exercitationem doloribus animi architecto saepe."
        }
      />
    </>
  );
}
