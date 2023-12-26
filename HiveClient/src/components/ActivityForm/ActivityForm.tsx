import React, { useState, useEffect } from "react";
import "./ActivityForm.style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { observer } from "mobx-react-lite";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Formik } from "formik";
import * as Yup from "yup";

// Custom Components
import Loader from "../Loader/Loader.component.jsx";
import MyTextInput from "../../form/MyTextInput.tsx";
import MyTextArea from "../../form/MyTextArea.tsx";
import MySelectInput from "../../form/MySelectinput.tsx";
import MyDateInput from "../../form/MyDateInput.tsx";

// Models and Stores
import { ActivityFormValues } from "../../app/models/activity.ts";
import { useStore } from "../../app/stores/store.ts";

// Common Options
import { categoryOptions } from "../../common/options/categoryOptions.ts";
import ActivitynavComponent from "../ActivityNavBar/Activitynav.component.tsx";

function ActivityForm() {
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.string().required("date is required"),
    venue: Yup.string().required("Venue is required"),
    city: Yup.string().required("City is required"),
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(new ActivityFormValues(activity)))
  }, [id, loadActivity]);

  function handleFormSubmit(activity: ActivityFormValues) {
    if (!activity.id) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() =>
        navigate(`/hive/activity/${newActivity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/hive/activity/${activity.id}`)
      );
    }
  }

  if (loadingInitial) return <Loader />;

  return (
    <>
      <ActivitynavComponent />
      <Segment clearing>
        <Formik
          validationSchema={validationSchema}
          enableReinitialize
          initialValues={activity}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ handleSubmit, isValid, isSubmitting, dirty }) => (
            <Form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="modern-form"
            >
              <Header content="Activity Details" sub color="teal" />

              <MyTextInput name="title" placeholder="Title" />
              <MyTextArea
                rows={3}
                name="description"
                placeholder="Description"
              />
              <MySelectInput
                options={categoryOptions}
                name="category"
                placeholder="Category"
              />
              <MyDateInput
                placeholderText="Date"
                name="date"
                showTimeSelect
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />

              <Header content="Location Details" sub color="teal" />
              <MyTextInput name="city" placeholder="City" />
              <MyTextInput name="venue" placeholder="Venue" />

              <Button
                loading={isSubmitting}
                floated="right"
                positive
                type="submit"
                content="Submit"
                className="submit-btn"
                disabled={isSubmitting || !dirty || !isValid}
              />
              <Button
                as={Link}
                to="/hive/activities"
                floated="right"
                positive
                content="Cancle"
                className="cancel-btn"
              />
            </Form>
          )}
        </Formik>
      </Segment>
    </>
  );
}

export default observer(ActivityForm);
