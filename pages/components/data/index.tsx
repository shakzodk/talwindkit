import React, { FC } from "react";
import AppLayout from "../../../components/layout/AppLayout";
import SectionHeader from "../../../components/site/header/SectionHeader";
import ComponentLayout from "../../../components/layout/ComponentLayout";
import InfoNumberCard from "../../../components/kit/components/elements/data/InfoNumberCard";
import InformationIconCard from "../../../components/kit/components/elements/data/InformationIconCard";
import SimpleIconDescCard from "../../../components/kit/components/elements/data/SimpleIconDescCard";
import SimpleNotificationCard from "../../../components/kit/components/elements/data/SimpleNotificationCard";
import SimplePhotoDescCard from "../../../components/kit/components/elements/data/SimplePhotoDescCard";
import CovidInfo from "../../../components/kit/components/elements/data/CovidInfo";
import InfoNumberCard2 from "../../../components/kit/components/elements/data/InfoNumberCard2";
import TagsCard from "../../../components/kit/components/elements/data/TagsCard";
import TaskCard from "../../../components/kit/components/elements/data/TaskCard";
import MutlipleTask from "../../../components/kit/components/elements/data/MutlipleTask";
import CalendarCard from "../../../components/kit/components/elements/data/CalendarCard";
import PaymentCard from "../../../components/kit/components/elements/data/PaymentCard";
import SimpleTask from "../../../components/kit/components/elements/data/SimpleTask";
import RecapCard from "../../../components/kit/components/elements/data/RecapCard";
import ActivityCard from "../../../components/kit/components/elements/data/ActivityCard";
import JobCard from "../../../components/kit/components/elements/data/JobCard";
import InfoNumberCard3 from "../../../components/kit/components/elements/data/InfoNumberCard3";
import PopularPerson from "../../../components/kit/components/elements/data/PopularPerson";
import VideoDetailsCard from "../../../components/kit/components/elements/data/VideoDetailsCard";

const DataPage = () => {
  return (
    <AppLayout
      title="Data display free Tailwind components"
      desc="Data, Cards and more components for tailwind css"
    >
      <SectionHeader title="Data display" />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Sales card"
        element={<InfoNumberCard />}
        component={InfoNumberCard}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Finance card"
        element={<InfoNumberCard3 />}
        component={InfoNumberCard3}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="People card"
        element={<PopularPerson />}
        component={PopularPerson}
      />
      <ComponentLayout
        vertical={false}
        title="Tasks card"
        showSwitchMode={true}
        element={<MutlipleTask />}
        component={MutlipleTask}
      />
      <ComponentLayout
        vertical={false}
        title="Simple task card"
        showSwitchMode={true}
        element={<SimpleTask />}
        component={SimpleTask}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Details Task card"
        element={<TaskCard />}
        component={TaskCard}
      />

      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Calendar event card"
        element={<CalendarCard />}
        component={CalendarCard}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Payment card"
        element={<PaymentCard />}
        component={PaymentCard}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Activity card"
        element={<ActivityCard />}
        component={ActivityCard}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Recap card"
        element={<RecapCard />}
        component={RecapCard}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Job card"
        element={<JobCard />}
        component={JobCard}
      />
      <ComponentLayout
        vertical={false}
        showSwitchMode={true}
        title="Video details card"
        element={<VideoDetailsCard />}
        component={VideoDetailsCard}
      />
      <ComponentLayout
        vertical={false}
        title="Bitcoin card"
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
        title="Tags card"
        element={<TagsCard />}
        component={TagsCard}
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
    </AppLayout>
  );
};

export default DataPage;
