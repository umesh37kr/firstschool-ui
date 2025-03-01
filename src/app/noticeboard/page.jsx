import React from "react";

const NoticeBoard = () => {
  return (
    <>
      <div className="container min-h-96 pb-2 bg-slate-200">
        <div>
          <h1 className="italic text-center text-2xl text-heading font-bold font text-ellipsis py-4">
            <span className="border-b-4 border-heading">NOTICE BOARD</span>
          </h1>
        </div>
        <div>
          <ul className="list-disc pl-6 m-6">
            <h1 className="font-semibold text-lg p-1">
              📌 General Announcements
            </h1>
            <li className="text-base p-1 ml-6">
              🏫 School Timings: School starts at 8:30 AM. Students must be on
              time.
            </li>
            <li className="text-base p-1 ml-6">
              📅 Upcoming Holidays: March 8 (Friday) - School closed for
              festival holiday.
            </li>
            <li className="text-base p-1 ml-6">
              🎒 Lost & Found: Visit the office for lost items.
            </li>
            <h1 className="font-semibold text-lg p-1">📖 Academic Updates</h1>
            <li className="text-base p-1 ml-6">
              ✏ Exams Alert: Mid-term exams begin from April 10, 2024. Timetable
              will be shared soon.
            </li>
            <li className="text-base p-1 ml-6">
              📚 Homework Submission: Submit your assignments before the due
              date.
            </li>
            <li className="text-base p-1 ml-6">
              🎓 Parent-Teacher Meeting (PTM): Scheduled for March 15. Parents
              are encouraged to attend.
            </li>
            <h1 className="font-semibold text-lg p-1">💡 Important Notices</h1>
            <li className="text-base p-1 ml-6">
              🚸 School Bus Timings: Bus routes updated. Check the transport
              office.
            </li>
            <li className="text-base p-1 ml-6">
              🏥 Health Check-up: Free medical check-up for students on March
              22.
            </li>
            <li className="text-base p-1 ml-6">
              ❗ Discipline Reminder: Mobile phones are not allowed in school.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NoticeBoard;
