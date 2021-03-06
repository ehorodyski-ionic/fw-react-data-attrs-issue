import React from "react";
import "./ExploreContainer.css";
import { IonLabel } from "@ionic/react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const myStringTypedVariable = "test";
  return (
    <div className="container">
      <IonLabel
        data-number-value={42}
        data-no-value-needed
        data-variable-string-value={myStringTypedVariable}
      >
        <strong>Ready to create an app?</strong>
      </IonLabel>
      <p
        data-number-value={42}
        data-no-value-needed
        data-explicit-string-value="myValue"
        data-variable-string-value={myStringTypedVariable}
      >
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
