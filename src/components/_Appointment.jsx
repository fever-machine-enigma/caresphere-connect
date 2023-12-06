import { Link } from "react-router-dom";

const _Appointment = () => {
  return (
    <div>
      <p>Here is where your appointments go.</p>
      <p>This page will be divided into two sections with w-1/2</p>
      <p>
        Where left section will have a search bar and all of the doctors info in
        a carded list manner.
      </p>
      <p>User can select either grid or list view in the options.</p>
      <p>
        The card will have the photo name of the doctor, his/her position and
        the department he is working in.
      </p>
      <p>
        On the right section will be a sidebar view of their entire profile like
        spotify now playing.
      </p>
      <p>
        Where at the end of the profile, there will be a button to book an
        appointment. When you click the button, a modal window will show up with
        all the detail to help you book an appointment at your wanted date and
        time.
      </p>
      <p>
        Once the appointment is booked, the user will receive a notification
        about it and they can view it in the dashboard.
      </p>
    </div>
  );
};

export default _Appointment;
