import React, { FC } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Elements from "../../components/kit/components/elements";
import Forms from "../../components/kit/components/form";
import Commerce from "../../components/kit/components/commerce";
import Navigation from "../../components/kit/components/navigation";

const ComponentsPage: FC = () => {
  return (
    <AppLayout>
      <Elements />
      <Forms />
      <Commerce />
      <Navigation />
    </AppLayout>
  );
};

export default ComponentsPage;
