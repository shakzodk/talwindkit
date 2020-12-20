import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import InfoNumberCard from "../../../components/kit/components/elements/data/InfoNumberCard";
import InformationIconCard from "../../../components/kit/components/elements/data/InformationIconCard";
import SimpleIconDescCard from "../../../components/kit/components/elements/data/SimpleIconDescCard";
import SimpleNotificationCard from "../../../components/kit/components/elements/data/SimpleNotificationCard";
import SimplePhotoDescCard from "../../../components/kit/components/elements/data/SimplePhotoDescCard";
import BandeauNumber from "../../../components/kit/components/elements/data/BandeauNumber";
import TimerEvent from "../../../components/kit/components/elements/data/TimerEvent";
import CovidInfo from "../../../components/kit/components/elements/data/CovidInfo";
import InfoNumberCard2 from "../../../components/kit/components/elements/data/InfoNumberCard2";
import BandeauInfo from "../../../components/kit/components/elements/data/BandeauInfo";

const DataPage = () => {
  return (
    <AppLayout>
      <SectionHeader title="Alert" />
      <ComponentLayout
        vertical={false}
        title="Sales card"
        element={<InfoNumberCard />}
        component={InfoNumberCard}
      />
      <ComponentLayout
        vertical={false}
        title="Number card"
        element={<InfoNumberCard2 />}
        component={InfoNumberCard2}
      />
      <ComponentLayout
        showSwitchMode={true}
        title="Covid data"
        element={<CovidInfo />}
        component={CovidInfo}
      />
      <ComponentLayout
        vertical={false}
        title="Information card"
        element={<InformationIconCard />}
        component={InformationIconCard}
      />
      <ComponentLayout
        vertical={false}
        title="Desc icon card"
        element={<SimpleIconDescCard />}
        component={SimpleIconDescCard}
      />
      <ComponentLayout
        vertical={false}
        title="Notif card"
        element={<SimpleNotificationCard />}
        component={SimpleNotificationCard}
      />
      <ComponentLayout
        vertical={false}
        title="Photo card"
        element={<SimplePhotoDescCard />}
        component={SimplePhotoDescCard}
      />

      <ComponentLayout
        vertical={true}
        title="Bandeau number"
        element={<BandeauNumber />}
        component={BandeauNumber}
      />
      <ComponentLayout
        vertical={true}
        title="Bandeau Info"
        showSwitchMode={true}
        element={<BandeauInfo />}
        component={BandeauInfo}
      />
      <ComponentLayout
        showSwitchMode={true}
        vertical={true}
        title="Timer event"
        element={<TimerEvent />}
        component={TimerEvent}
      />
    </AppLayout>
  );
};

export default DataPage;
